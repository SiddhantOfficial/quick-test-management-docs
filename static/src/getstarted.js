import { router } from '@forge/bridge';
import { enableTheme } from './theme';

enableTheme();

// Custom UI runs in a sandboxed iframe, so links open through the bridge
document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    event.preventDefault();
    router.open(link.href);
});
