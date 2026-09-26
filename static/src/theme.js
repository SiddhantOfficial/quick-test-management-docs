import { view } from '@forge/bridge';

/**
 * Follow the Jira light/dark theme. Colors in styles.css use Atlassian
 * design tokens (var(--ds-*)) with light-theme fallbacks.
 */
export async function enableTheme() {
    try {
        await view.theme.enable();
    } catch (error) {
        // Theming is cosmetic; the fallbacks keep the light theme working
    }
}
