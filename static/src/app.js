/**
 * Quick Test Management for Jira - Frontend Application
 * v2.7.0 - Instant UI responsiveness with async backend saves
 */

import { invoke, view } from '@forge/bridge';

// Constants
const DEBOUNCE_MS = 600;
const STATUS_CONFIG = {
    untested: { icon: '🧪', text: 'Test Status', label: 'Untested' },
    passed: { icon: '✅', text: 'Test Passed', label: 'Passed' },
    failed: { icon: '❌', text: 'Test Failed', label: 'Failed' },
    blocked: { icon: '🚫', text: 'Blocked', label: 'Blocked' },
    in_progress: { icon: '🔄', text: 'Testing in Progress', label: 'In Progress' }
};

// State
let currentIssueId = null;
let currentStatus = 'untested';
let saveTimeout = null;
let pendingStatusSave = null; // Track pending save request

// DOM Elements cache
const elements = {};

/**
 * Initialize the application
 */
async function init() {
    console.log('[QuickTest] Initializing v2.7.0...');
    cacheElements();
    setupEventListeners();

    try {
        const context = await view.getContext();
        currentIssueId = context?.extension?.issue?.id;

        if (!currentIssueId) {
            showError('Could not get issue context');
            return;
        }

        await loadTestCase();
        showMainContent();
    } catch (error) {
        console.error('[QuickTest] Init error:', error);
        showError('Failed to initialize');
    }
}

/**
 * Cache DOM elements
 */
function cacheElements() {
    elements.loadingState = document.getElementById('loading-state');
    elements.mainContent = document.getElementById('main-content');
    elements.errorState = document.getElementById('error-state');
    elements.statusDisplay = document.getElementById('status-display');
    elements.statusIcon = document.getElementById('status-icon');
    elements.statusText = document.getElementById('status-text');
    elements.testNotes = document.getElementById('test-notes');
    elements.saveIndicator = document.getElementById('save-indicator');
    elements.historyCount = document.getElementById('history-count');
    elements.historyList = document.getElementById('history-list');
    elements.emptyHistory = document.getElementById('empty-history');
    elements.lastUpdated = document.getElementById('last-updated');
    elements.errorMessage = document.getElementById('error-message');
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Status buttons - INSTANT response
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const status = btn.dataset.status;
            if (status) updateStatus(status);
        });
    });

    // Reset button
    document.getElementById('btn-reset')?.addEventListener('click', (e) => {
        e.preventDefault();
        resetTestCase();
    });

    // Notes auto-save
    document.getElementById('test-notes')?.addEventListener('input', handleNotesInput);

    // Retry button
    document.getElementById('retry-btn')?.addEventListener('click', () => location.reload());
}

/**
 * Load test case from storage
 */
async function loadTestCase() {
    try {
        const response = await invoke('getTestCase', { issueId: currentIssueId });
        if (response?.success && response.testCase) {
            updateUI(response.testCase);
        } else {
            updateUI({ status: 'untested', notes: '', runs: [] });
        }
    } catch (error) {
        console.error('[QuickTest] Load error:', error);
        updateUI({ status: 'untested', notes: '', runs: [] });
    }
}

/**
 * Update UI with test case data
 */
function updateUI(testCase) {
    currentStatus = testCase.status || 'untested';
    const config = STATUS_CONFIG[currentStatus] || STATUS_CONFIG.untested;

    if (elements.statusIcon) elements.statusIcon.textContent = config.icon;
    if (elements.statusText) elements.statusText.textContent = config.text;

    if (elements.statusDisplay) {
        elements.statusDisplay.className = 'status-display';
        if (currentStatus !== 'untested') {
            elements.statusDisplay.classList.add(currentStatus);
        }
    }

    updateButtonStates(currentStatus);

    if (elements.testNotes && testCase.notes !== undefined) {
        elements.testNotes.value = testCase.notes || '';
    }

    if (elements.lastUpdated && testCase.updatedAt) {
        elements.lastUpdated.textContent = formatTime(testCase.updatedAt);
    }

    updateHistory(testCase.runs || []);
}

/**
 * Update button active states
 */
function updateButtonStates(status) {
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.status === status);
    });
}

/**
 * Update test status - INSTANT UI, async backend
 */
function updateStatus(newStatus) {
    if (newStatus === currentStatus) return;

    // INSTANT UI update - no waiting
    currentStatus = newStatus;
    const config = STATUS_CONFIG[newStatus];

    if (elements.statusIcon) elements.statusIcon.textContent = config.icon;
    if (elements.statusText) elements.statusText.textContent = config.text;
    if (elements.statusDisplay) {
        elements.statusDisplay.className = `status-display ${newStatus}`;
    }
    updateButtonStates(newStatus);
    showSaveIndicator('saving', 'Saving...');

    // Cancel any pending save and start new one
    if (pendingStatusSave) {
        pendingStatusSave.cancelled = true;
    }

    const saveRequest = { cancelled: false, status: newStatus };
    pendingStatusSave = saveRequest;

    // Async save to backend
    saveStatusToBackend(saveRequest);
}

/**
 * Save status to backend asynchronously
 */
async function saveStatusToBackend(saveRequest) {
    try {
        const notes = elements.testNotes?.value || '';
        const response = await invoke('updateStatus', {
            issueId: currentIssueId,
            status: saveRequest.status,
            notes
        });

        // Only update if this request wasn't cancelled
        if (saveRequest.cancelled) return;

        if (response?.success) {
            showSaveIndicator('saved', '✓ Saved');
            if (response.testCase) {
                updateHistory(response.testCase.runs || []);
                if (response.testCase.updatedAt && elements.lastUpdated) {
                    elements.lastUpdated.textContent = formatTime(response.testCase.updatedAt);
                }
            }
            setTimeout(() => hideSaveIndicator(), 1500);
        } else {
            throw new Error(response?.error || 'Save failed');
        }
    } catch (error) {
        if (saveRequest.cancelled) return;
        console.error('[QuickTest] Save error:', error);
        showSaveIndicator('error', '✗ Error');
        setTimeout(() => hideSaveIndicator(), 2000);
    }
}

/**
 * Handle notes input with debounce
 */
function handleNotesInput() {
    if (saveTimeout) clearTimeout(saveTimeout);

    saveTimeout = setTimeout(async () => {
        showSaveIndicator('saving', 'Saving...');

        try {
            const notes = elements.testNotes?.value || '';
            const response = await invoke('updateNotes', {
                issueId: currentIssueId,
                notes
            });

            if (response?.success) {
                showSaveIndicator('saved', '✓ Saved');
                if (response.testCase?.updatedAt && elements.lastUpdated) {
                    elements.lastUpdated.textContent = formatTime(response.testCase.updatedAt);
                }
                setTimeout(() => hideSaveIndicator(), 1500);
            } else {
                throw new Error(response?.error || 'Save failed');
            }
        } catch (error) {
            console.error('[QuickTest] Save notes error:', error);
            showSaveIndicator('error', '✗ Error');
            setTimeout(() => hideSaveIndicator(), 2000);
        }
    }, DEBOUNCE_MS);
}

/**
 * Reset test case
 */
async function resetTestCase() {
    if (currentStatus === 'untested' && !elements.testNotes?.value?.trim()) return;

    // Instant UI reset
    currentStatus = 'untested';
    if (elements.testNotes) elements.testNotes.value = '';
    updateUI({ status: 'untested', notes: '', runs: [] });
    showSaveIndicator('saving', 'Resetting...');

    try {
        const response = await invoke('resetTestCase', { issueId: currentIssueId });

        if (response?.success) {
            if (response.testCase) updateUI(response.testCase);
            showSaveIndicator('saved', '✓ Reset');
            setTimeout(() => hideSaveIndicator(), 1500);
        } else {
            throw new Error(response?.error || 'Reset failed');
        }
    } catch (error) {
        console.error('[QuickTest] Reset error:', error);
        showSaveIndicator('error', '✗ Error');
        setTimeout(() => hideSaveIndicator(), 2000);
    }
}

/**
 * Update history display
 */
function updateHistory(runs) {
    if (!elements.historyCount || !elements.historyList || !elements.emptyHistory) return;

    const count = runs?.length || 0;
    elements.historyCount.textContent = `${count} run${count !== 1 ? 's' : ''}`;

    if (count === 0) {
        elements.emptyHistory.style.display = 'block';
        elements.historyList.innerHTML = '';
        return;
    }

    elements.emptyHistory.style.display = 'none';
    elements.historyList.innerHTML = runs.map(run => {
        const config = STATUS_CONFIG[run.status] || STATUS_CONFIG.untested;
        return `
            <div class="history-item ${run.status || 'untested'}">
                <div class="history-item-content">
                    <div class="history-item-header">
                        <span class="history-item-status">${config.label}</span>
                        <span class="history-item-time">${formatTime(run.timestamp)}</span>
                    </div>
                    ${run.notes ? `<div class="history-item-notes">${escapeHtml(run.notes)}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Format timestamp
 */
function formatTime(isoDate) {
    if (!isoDate) return '';
    try {
        const date = new Date(isoDate);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch (e) {
        return '';
    }
}

function showSaveIndicator(status, text) {
    if (elements.saveIndicator) {
        elements.saveIndicator.className = `save-indicator ${status}`;
        elements.saveIndicator.textContent = text;
        elements.saveIndicator.style.display = 'inline-block';
    }
}

function hideSaveIndicator() {
    if (elements.saveIndicator) {
        elements.saveIndicator.textContent = '';
        elements.saveIndicator.className = 'save-indicator';
        elements.saveIndicator.style.display = 'none';
    }
}

function showMainContent() {
    if (elements.loadingState) elements.loadingState.style.display = 'none';
    if (elements.mainContent) elements.mainContent.style.display = 'block';
    if (elements.errorState) elements.errorState.style.display = 'none';
}

function showError(message) {
    if (elements.loadingState) elements.loadingState.style.display = 'none';
    if (elements.mainContent) elements.mainContent.style.display = 'none';
    if (elements.errorState) elements.errorState.style.display = 'flex';
    if (elements.errorMessage) elements.errorMessage.textContent = message;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
