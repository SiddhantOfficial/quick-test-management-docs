// Builds each Forge resource into its own folder under build/.
// Only these folders are uploaded, which keeps node_modules out of the
// hosted resources (Forge allows at most 5000 files per resource).
import { build } from 'esbuild';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';

const pages = ['panel', 'getstarted'];

rmSync('build', { recursive: true, force: true });

for (const page of pages) {
    const out = `build/${page}`;
    mkdirSync(out, { recursive: true });
    cpSync(`pages/${page}/index.html`, `${out}/index.html`);
    cpSync('styles.css', `${out}/styles.css`);
    cpSync('icon.svg', `${out}/icon.svg`);

    const entry = `src/${page}.js`;
    if (existsSync(entry)) {
        await build({
            entryPoints: [entry],
            bundle: true,
            outfile: `${out}/app.js`,
            format: 'iife',
            target: 'es2020',
            minify: true,
            logLevel: 'warning'
        });
    }
    console.log(`built ${out}`);
}
