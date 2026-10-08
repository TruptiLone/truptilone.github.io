import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

// This portfolio uses native links only, so its rendered HTML needs no client runtime.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(process.argv[2] || 'out');
const { default: worker } = await import(`${root}/dist/server/index.js`);
const response = await worker.fetch(new Request('http://localhost/', { headers: { accept: 'text/html' } }), {
  ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) },
}, { waitUntil() {}, passThroughOnException() {} });
assert.equal(response.status, 200);
let html = await response.text();
const styles = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)];
assert.ok(styles.length, 'Expected production CSS');
for (const [tag] of styles) {
  const href = tag.match(/href="([^"]+)"/)[1];
  assert.ok(href.startsWith('/assets/'));
  const css = await readFile(resolve(root, 'dist/client', href.slice(1)), 'utf8');
  html = html.replace(tag, `<style>${css}</style>`);
}
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<link\b[^>]*rel="(?:modulepreload|preload)"[^>]*>/g, '');
assert.equal((html.match(/<article\b/g) || []).length, 8);
assert.ok(html.indexOf('Academic projects') < html.indexOf('Featured projects'));
assert.ok(!html.includes('href="#"'));
assert.ok(!html.includes('<script'));
await mkdir(output, { recursive: true });
await writeFile(resolve(output, 'index.html'), html);
for (const name of ['favicon.svg', 'og.png']) await copyFile(resolve(root, 'public', name), resolve(output, name));
await writeFile(resolve(output, '.nojekyll'), '');
console.log(`Exported eight linked projects to ${output}`);
