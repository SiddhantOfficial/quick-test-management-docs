import Resolver from '@forge/resolver';
import { kvs } from '@forge/kvs';
import api, { route } from '@forge/api';

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

// Issue property mirrored for JQL, indexed by the jira:entityProperty module:
//   testStatus = failed    testStatusUpdated >= -7d
const STATUS_PROPERTY = 'quick-test-status';

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

    return { issueId, key: `testcase:${issueId}` };
}

/**
 * Only users who can edit the issue may record results (checked as the user).
 */
async function canEditIssue(issueId) {
    const response = await api.asUser().requestJira(
        route`/rest/api/3/mypermissions?issueId=${issueId}&permissions=EDIT_ISSUES`
    );
    if (!response.ok) {
        return false;
    }
    const body = await response.json();
    return Boolean(body?.permissions?.EDIT_ISSUES?.havePermission);
}

/**
 * Store the status on the issue so it can be searched with JQL.
 * Written as the user, so Jira enforces their permissions as well.
 */
async function setStatusProperty(issueId, status, updatedAt) {
    const response = await api.asUser().requestJira(
        route`/rest/api/3/issue/${issueId}/properties/${STATUS_PROPERTY}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status, updatedAt })
        }
    );
    if (!response.ok) {
        throw new Error(`Issue property update failed (${response.status})`);
    }
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
 * Wrap a mutating resolver with licence, context and permission checks.
 */
function mutation(handler) {
    return async ({ payload, context }) => {
        const scope = getScope(context);
        if (scope.error) {
            return { success: false, error: scope.error };
        }

        try {
            if (!(await canEditIssue(scope.issueId))) {
                return { success: false, error: 'no-permission' };
            }
            const existing = sanitize(await kvs.get(scope.key));
            const testCase = await handler({ payload, existing, ...scope });
            return { success: true, testCase };
        } catch (err) {
            console.error('Error updating test case:', err.message);
            return { success: false, error: 'Failed to save' };
        }
    };
}

/**
 * Get the test case data for the current issue
 */
resolver.define('getTestCase', async ({ context }) => {
    const scope = getScope(context);
    if (scope.error) {
        return { success: false, error: scope.error };
    }

    try {
        const [testCase, canEdit] = await Promise.all([
            kvs.get(scope.key),
            canEditIssue(scope.issueId)
        ]);
        return {
            success: true,
            canEdit,
            testCase: testCase ? sanitize(testCase) : emptyTestCase()
        };
    } catch (err) {
        console.error('Error fetching test case:', err.message);
        return { success: false, error: 'Failed to fetch test case' };
    }
});

/**
 * Record a test run with a new status
 */
resolver.define('updateStatus', mutation(async ({ payload, existing, issueId, key }) => {
    const status = payload?.status;
    if (!Object.values(TEST_STATUSES).includes(status)) {
        throw new Error('Invalid status');
    }

    const notes = readNotes(payload);
    const timestamp = new Date().toISOString();
    const updatedTestCase = {
        status,
        notes: notes || existing.notes,
        runs: [{ status, notes, timestamp }, ...existing.runs].slice(0, MAX_RUNS),
        updatedAt: timestamp
    };

    await setStatusProperty(issueId, status, timestamp);
    await kvs.set(key, updatedTestCase);
    return updatedTestCase;
}));

/**
 * Update test case notes only (without changing status)
 */
resolver.define('updateNotes', mutation(async ({ payload, existing, key }) => {
    const updatedTestCase = {
        ...existing,
        notes: readNotes(payload),
        updatedAt: new Date().toISOString()
    };

    await kvs.set(key, updatedTestCase);
    return updatedTestCase;
}));

/**
 * Reset test case to untested
 */
resolver.define('resetTestCase', mutation(async ({ existing, issueId, key }) => {
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

    await setStatusProperty(issueId, TEST_STATUSES.UNTESTED, timestamp);
    await kvs.set(key, resetTestCase);
    return resetTestCase;
}));

export const handler = resolver.getDefinitions();
