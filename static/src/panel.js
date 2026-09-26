/**
 * Quick Test Management for Jira - issue panel
 * v3.0.0 - Forge KVS storage, permission-aware, JQL-searchable status, theming
 */

import { invoke, view } from '@forge/bridge';
import { enableTheme } from './theme';

const DEBOUNCE_MS = 600;
const STATUS_CONFIG = {
    untested: { icon: '🧪', text: 'Not tested yet', label: 'Untested' },
    passed: { icon: '✅', text: 'Test passed', label: 'Passed' },
    failed: { icon: '❌', text: 'Test failed', label: 'Failed' },
    blocked: { icon: '🚫', text: 'Blocked', label: 'Blocked' },
    in_progress: { icon: '🔄', text: 'Testing in progress', label: 'In progress' }
};
const MESSAGES = {
    unlicensed: 'Your Quick Test Management license is not active. Ask a Jira admin to renew it in Manage apps.',
    'no-permission': 'You need Edit issue permission to record results.'
};

// State
let currentStatus = 'untested';
let canEdit = false;
let notesTimeout = null;
let notesDirty = false;
let latestStatusRequest = 0;

const elements = {};

async function init() {
    enableTheme();
    cacheElements();
    setupEventListeners();

    try {
        const context = await view.getContext();
        if (!context?.extension?.issue?.id) {
            showError('Could not get issue context');
            return;
        }

        const response = await invoke('getTestCase');
        if (!response?.success) {
            showError(MESSAGES[response?.error] || 'Could not load test status');
            return;
        }

        canEdit = Boolean(response.canEdit);
        updateUI(response.testCase);
        setEditable(canEdit);
        showMainContent();
    } catch (error) {
        console.error('[QuickTest] Init error:', error);
        showError('Could not load test status');
    }
}

function cacheElements() {
    const ids = {
        loadingState: 'loading-state',
        mainContent: 'main-content',
        errorState: 'error-state',
        statusDisplay: 'status-display',
        statusIcon: 'status-icon',
        statusText: 'status-text',
        testNotes: 'test-notes',
        saveIndicator: 'save-indicator',
        historyCount: 'history-count',
        historyList: 'history-list',
        emptyHistory: 'empty-history',
        lastUpdated: 'last-updated',
        errorMessage: 'error-message',
        permissionNote: 'permission-note',
        resetBtn: 'btn-reset'
    };
    for (const [name, id] of Object.entries(ids)) {
        elements[name] = document.getElementById(id);
    }
}

function setupEventListeners() {
    document.querySelectorAll('.action-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (btn.dataset.status) updateStatus(btn.dataset.status);
        });
    });

    elements.resetBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        resetTestCase();
    });

    elements.testNotes?.addEventListener('input', handleNotesInput);
    elements.testNotes?.addEventListener('blur', flushNotes);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') flushNotes();
    });
    window.addEventListener('pagehide', flushNotes);

    document.getElementById('retry-btn')?.addEventListener('click', () => location.reload());
}

function setEditable(editable) {
    document.querySelectorAll('.action-btn').forEach((btn) => { btn.disabled = !editable; });
    if (elements.resetBtn) elements.resetBtn.disabled = !editable;
    if (elements.testNotes) elements.testNotes.disabled = !editable;
    if (elements.permissionNote) elements.permissionNote.hidden = editable;
}

function renderStatus(status) {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG.untested;
    if (elements.statusIcon) elements.statusIcon.textContent = config.icon;
    if (elements.statusText) elements.statusText.textContent = config.text;
    if (elements.statusDisplay) {
        elements.statusDisplay.className = 'status-display';
        if (status !== 'untested') elements.statusDisplay.classList.add(status);
    }
    document.querySelectorAll('.action-btn').forEach((btn) => {
        const active = btn.dataset.status === status;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
}

function updateUI(testCase) {
    currentStatus = STATUS_CONFIG[testCase.status] ? testCase.status : 'untested';
    renderStatus(currentStatus);

    if (elements.testNotes && !notesDirty) {
        elements.testNotes.value = testCase.notes || '';
    }
    if (elements.lastUpdated) {
        elements.lastUpdated.textContent = testCase.updatedAt ? `Updated ${formatTime(testCase.updatedAt)}` : '';
    }
    updateHistory(testCase.runs || []);
}

/**
 * Update test status - instant UI, rolled back if the save fails
 */
async function updateStatus(newStatus) {
    if (!canEdit || newStatus === currentStatus || !STATUS_CONFIG[newStatus]) return;

    const previousStatus = currentStatus;
    const requestId = ++latestStatusRequest;
    currentStatus = newStatus;
    renderStatus(newStatus);
    showSaveIndicator('saving', 'Saving…');

    // Notes typed so far are saved with the run
    if (notesTimeout) clearTimeout(notesTimeout);
    notesDirty = false;

    try {
        const response = await invoke('updateStatus', {
            status: newStatus,
            notes: elements.testNotes?.value || ''
        });
        if (requestId !== latestStatusRequest) return;

        if (!response?.success) {
            throw new Error(response?.error || 'Save failed');
        }
        updateUI(response.testCase);
        flashSaveIndicator('saved', '✓ Saved');
    } catch (error) {
        if (requestId !== latestStatusRequest) return;
        console.error('[QuickTest] Save error:', error);
        currentStatus = previousStatus;
        renderStatus(previousStatus);
        flashSaveIndicator('error', MESSAGES[error.message] || '✗ Not saved');
    }
}

function handleNotesInput() {
    notesDirty = true;
    if (notesTimeout) clearTimeout(notesTimeout);
    notesTimeout = setTimeout(flushNotes, DEBOUNCE_MS);
}

async function flushNotes() {
    if (notesTimeout) {
        clearTimeout(notesTimeout);
        notesTimeout = null;
    }
    if (!notesDirty || !canEdit) return;
    notesDirty = false;
    showSaveIndicator('saving', 'Saving…');

    try {
        const response = await invoke('updateNotes', { notes: elements.testNotes?.value || '' });
        if (!response?.success) {
            throw new Error(response?.error || 'Save failed');
        }
        if (response.testCase?.updatedAt && elements.lastUpdated) {
            elements.lastUpdated.textContent = `Updated ${formatTime(response.testCase.updatedAt)}`;
        }
        flashSaveIndicator('saved', '✓ Saved');
    } catch (error) {
        notesDirty = true;
        console.error('[QuickTest] Save notes error:', error);
        flashSaveIndicator('error', MESSAGES[error.message] || '✗ Not saved');
    }
}

async function resetTestCase() {
    if (!canEdit) return;
    if (currentStatus === 'untested' && !elements.testNotes?.value?.trim()) return;

    latestStatusRequest++;
    if (notesTimeout) clearTimeout(notesTimeout);
    notesDirty = false;
    showSaveIndicator('saving', 'Resetting…');

    try {
        const response = await invoke('resetTestCase');
        if (!response?.success) {
            throw new Error(response?.error || 'Reset failed');
        }
        updateUI(response.testCase);
        flashSaveIndicator('saved', '✓ Reset');
    } catch (error) {
        console.error('[QuickTest] Reset error:', error);
        flashSaveIndicator('error', MESSAGES[error.message] || '✗ Not reset');
    }
}

function updateHistory(runs) {
    if (!elements.historyCount || !elements.historyList || !elements.emptyHistory) return;

    const count = runs.length;
    elements.historyCount.textContent = `${count} run${count !== 1 ? 's' : ''}`;
    elements.emptyHistory.style.display = count === 0 ? 'block' : 'none';
    elements.historyList.replaceChildren(...runs.map(renderRun));
}

function renderRun(run) {
    const status = STATUS_CONFIG[run.status] ? run.status : 'untested';

    const item = document.createElement('div');
    item.className = `history-item ${status}`;

    const content = document.createElement('div');
    content.className = 'history-item-content';

    const header = document.createElement('div');
    header.className = 'history-item-header';

    const label = document.createElement('span');
    label.className = 'history-item-status';
    label.textContent = STATUS_CONFIG[status].label;

    const time = document.createElement('span');
    time.className = 'history-item-time';
    time.textContent = formatTime(run.timestamp);

    header.append(label, time);
    content.append(header);

    if (run.notes) {
        const notes = document.createElement('div');
        notes.className = 'history-item-notes';
        notes.textContent = run.notes;
        content.append(notes);
    }

    item.append(content);
    return item;
}

function formatTime(isoDate) {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return '';

    const diffMins = Math.floor((Date.now() - date.getTime()) / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

let indicatorTimeout = null;

function showSaveIndicator(status, text) {
    if (indicatorTimeout) clearTimeout(indicatorTimeout);
    if (!elements.saveIndicator) return;
    elements.saveIndicator.className = `save-indicator ${status}`;
    elements.saveIndicator.textContent = text;
    elements.saveIndicator.style.display = 'inline-block';
}

function flashSaveIndicator(status, text) {
    showSaveIndicator(status, text);
    indicatorTimeout = setTimeout(() => {
        if (!elements.saveIndicator) return;
        elements.saveIndicator.textContent = '';
        elements.saveIndicator.className = 'save-indicator';
        elements.saveIndicator.style.display = 'none';
    }, status === 'error' ? 4000 : 1500);
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
