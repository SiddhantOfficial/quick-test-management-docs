import Resolver from '@forge/resolver';
import { storage } from '@forge/api';

const resolver = new Resolver();

/**
 * Test status options
 */
const TEST_STATUSES = {
    UNTESTED: 'untested',
    PASSED: 'passed',
    FAILED: 'failed',
    BLOCKED: 'blocked',
    IN_PROGRESS: 'in_progress'
};

/**
 * Get the test case data for a specific issue
 * Key format: testcase:{issueId}
 */
resolver.define('getTestCase', async ({ payload, context }) => {
    const { issueId } = payload;
    const accountId = context.accountId;

    if (!issueId) {
        return { success: false, error: 'Missing issueId' };
    }

    const key = `testcase:${issueId}`;

    try {
        const testCase = await storage.get(key);
        return {
            success: true,
            testCase: testCase || {
                status: TEST_STATUSES.UNTESTED,
                notes: '',
                runs: [],
                updatedAt: null,
                updatedBy: null
            }
        };
    } catch (error) {
        console.error('Error fetching test case:', error);
        return { success: false, error: 'Failed to fetch test case' };
    }
});

/**
 * Update test case status
 */
resolver.define('updateStatus', async ({ payload, context }) => {
    const { issueId, status, notes } = payload;
    const accountId = context.accountId;

    if (!issueId || !status) {
        return { success: false, error: 'Missing issueId or status' };
    }

    // Validate status
    if (!Object.values(TEST_STATUSES).includes(status)) {
        return { success: false, error: 'Invalid status' };
    }

    const key = `testcase:${issueId}`;

    try {
        // Get existing data
        const existing = await storage.get(key) || {
            status: TEST_STATUSES.UNTESTED,
            notes: '',
            runs: []
        };

        // Create new run record
        const newRun = {
            status,
            notes: notes || '',
            tester: accountId,
            timestamp: new Date().toISOString()
        };

        // Keep only last 10 runs
        const runs = [newRun, ...(existing.runs || [])].slice(0, 10);

        // Update test case
        const updatedTestCase = {
            status,
            notes: notes || existing.notes,
            runs,
            updatedAt: new Date().toISOString(),
            updatedBy: accountId
        };

        await storage.set(key, updatedTestCase);

        return {
            success: true,
            testCase: updatedTestCase
        };
    } catch (error) {
        console.error('Error updating test case:', error);
        return { success: false, error: 'Failed to update test case' };
    }
});

/**
 * Update test case notes only (without changing status)
 */
resolver.define('updateNotes', async ({ payload, context }) => {
    const { issueId, notes } = payload;
    const accountId = context.accountId;

    if (!issueId) {
        return { success: false, error: 'Missing issueId' };
    }

    const key = `testcase:${issueId}`;

    try {
        const existing = await storage.get(key) || {
            status: TEST_STATUSES.UNTESTED,
            notes: '',
            runs: []
        };

        const updatedTestCase = {
            ...existing,
            notes: notes || '',
            updatedAt: new Date().toISOString(),
            updatedBy: accountId
        };

        await storage.set(key, updatedTestCase);

        return {
            success: true,
            testCase: updatedTestCase
        };
    } catch (error) {
        console.error('Error updating notes:', error);
        return { success: false, error: 'Failed to update notes' };
    }
});

/**
 * Reset test case to untested
 */
resolver.define('resetTestCase', async ({ payload, context }) => {
    const { issueId } = payload;
    const accountId = context.accountId;

    if (!issueId) {
        return { success: false, error: 'Missing issueId' };
    }

    const key = `testcase:${issueId}`;

    try {
        const existing = await storage.get(key);

        // Add reset to history
        const resetRun = {
            status: TEST_STATUSES.UNTESTED,
            notes: 'Test case reset',
            tester: accountId,
            timestamp: new Date().toISOString()
        };

        const runs = existing ? [resetRun, ...(existing.runs || [])].slice(0, 10) : [resetRun];

        const resetTestCase = {
            status: TEST_STATUSES.UNTESTED,
            notes: '',
            runs,
            updatedAt: new Date().toISOString(),
            updatedBy: accountId
        };

        await storage.set(key, resetTestCase);

        return {
            success: true,
            testCase: resetTestCase
        };
    } catch (error) {
        console.error('Error resetting test case:', error);
        return { success: false, error: 'Failed to reset test case' };
    }
});

export const handler = resolver.getDefinitions();
