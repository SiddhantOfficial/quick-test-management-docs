import Resolver from '@forge/resolver';
import { kvs } from '@forge/kvs';

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

const MAX_NOTES_LENGTH = 5000;
const MAX_RUNS = 10;

const emptyTestCase = () => ({
    status: TEST_STATUSES.UNTESTED,
    notes: '',
    runs: [],
    updatedAt: null
});

/**
 * Resolve the storage key from the trusted Forge context.
 * The issue id is never taken from the client payload, so users can only
 * change the test case of the issue they are currently viewing.
 * Key format: testcase:{issueId}
 */
function getScope(context) {
    // context.license is only present for paid apps in production
    if (context.license && context.license.active === false) {
        return { error: 'unlicensed' };
    }

    const issueId = context.extension?.issue?.id;
    if (!issueId) {
        return { error: 'Missing issue context' };
    }

    return { key: `testcase:${issueId}` };
}

function readNotes(payload) {
    const notes = typeof payload?.notes === 'string' ? payload.notes : '';
    return notes.slice(0, MAX_NOTES_LENGTH);
}

/**
 * Drop fields written by older versions that stored Atlassian account ids
 */
function sanitize(testCase) {
    const { status, notes, runs, updatedAt } = { ...emptyTestCase(), ...testCase };
    return {
        status,
        notes,
        updatedAt,
        runs: (runs || []).map(({ status, notes, timestamp }) => ({ status, notes, timestamp }))
    };
}

/**
 * Get the test case data for the current issue
 */
resolver.define('getTestCase', async ({ context }) => {
    const { key, error } = getScope(context);
    if (error) {
        return { success: false, error };
    }

    try {
        const testCase = await kvs.get(key);
        return {
            success: true,
            testCase: testCase ? sanitize(testCase) : emptyTestCase()
        };
    } catch (err) {
        console.error('Error fetching test case');
        return { success: false, error: 'Failed to fetch test case' };
    }
});

/**
 * Update test case status
 */
resolver.define('updateStatus', async ({ payload, context }) => {
    const { key, error } = getScope(context);
    if (error) {
        return { success: false, error };
    }

    const status = payload?.status;
    if (!Object.values(TEST_STATUSES).includes(status)) {
        return { success: false, error: 'Invalid status' };
    }

    try {
        const existing = sanitize(await kvs.get(key));
        const notes = readNotes(payload);
        const timestamp = new Date().toISOString();

        const updatedTestCase = {
            status,
            notes: notes || existing.notes,
            runs: [{ status, notes, timestamp }, ...existing.runs].slice(0, MAX_RUNS),
            updatedAt: timestamp
        };

        await kvs.set(key, updatedTestCase);
        return { success: true, testCase: updatedTestCase };
    } catch (err) {
        console.error('Error updating test case');
        return { success: false, error: 'Failed to update test case' };
    }
});

/**
 * Update test case notes only (without changing status)
 */
resolver.define('updateNotes', async ({ payload, context }) => {
    const { key, error } = getScope(context);
    if (error) {
        return { success: false, error };
    }

    try {
        const existing = sanitize(await kvs.get(key));
        const updatedTestCase = {
            ...existing,
            notes: readNotes(payload),
            updatedAt: new Date().toISOString()
        };

        await kvs.set(key, updatedTestCase);
        return { success: true, testCase: updatedTestCase };
    } catch (err) {
        console.error('Error updating notes');
        return { success: false, error: 'Failed to update notes' };
    }
});

/**
 * Reset test case to untested
 */
resolver.define('resetTestCase', async ({ context }) => {
    const { key, error } = getScope(context);
    if (error) {
        return { success: false, error };
    }

    try {
        const existing = sanitize(await kvs.get(key));
        const timestamp = new Date().toISOString();

        const resetTestCase = {
            status: TEST_STATUSES.UNTESTED,
            notes: '',
            runs: [
                { status: TEST_STATUSES.UNTESTED, notes: 'Test case reset', timestamp },
                ...existing.runs
            ].slice(0, MAX_RUNS),
            updatedAt: timestamp
        };

        await kvs.set(key, resetTestCase);
        return { success: true, testCase: resetTestCase };
    } catch (err) {
        console.error('Error resetting test case');
        return { success: false, error: 'Failed to reset test case' };
    }
});

export const handler = resolver.getDefinitions();
