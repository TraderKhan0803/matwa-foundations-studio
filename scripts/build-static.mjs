#!/usr/bin/env node
/**
 * Extract the static-only portion of the TanStack Start build into `dist/`,
 * so the site can be uploaded to Netlify, GitHub Pages, Cloudflare Pages,
 * or any other static host. The server bundle is intentionally excluded.
 *
 * Run after `vite build` (see the `build:static` npm script).
 */
import { existsSync, rmSync, cpSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const dist = join(root, "dist");

// TanStack Start / Nitro emit prerendered HTML + assets under one of these dirs.
const candidates = [
  ".output/public",
  ".tanstack/start/build/client",
  "dist/client",
];

const source = candidates.map((p) => join(root, p)).find((p) => existsSync(p));

if (!source) {
  console.error(
    "[build:static] Could not find a prerendered output directory. Looked in:\n  " +
      candidates.join("\n  "),
  );
  process.exit(1);
}

console.log(`[build:static] Using static output from: ${source}`);

if (existsSync(dist)) rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(source, dist, { recursive: true });

// Defensive: strip any `server/` folder that might have been copied in.
const stripped = ["server", "_server", "_worker.js"];
for (const name of stripped) {
  const p = join(dist, name);
  if (existsSync(p)) {
    rmSync(p, { recursive: true, force: true });
    console.log(`[build:static] Removed ${name}/ from dist/`);
  }
}

const files = readdirSync(dist).filter((f) => statSync(join(dist, f)).isFile());
const htmlFiles = files.filter((f) => f.endsWith(".html"));
console.log(
  `[build:static] dist/ ready — ${htmlFiles.length} HTML file(s) at the root, ${files.length} top-level files total.`,
);
