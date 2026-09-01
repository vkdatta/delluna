# Delluna Icons V4

Delluna is a source-first SVG icon library with immutable icon IDs, a registry, a JIT browser runtime, generated distribution files, and a production-oriented administrative publishing workflow.

## Source of truth

`src/icons/` contains the SVG artwork and is authoritative. The builder never rewrites source files. `registry/icons.json` is the canonical generated registry; the root `registry.json` and `dist/registry.json` are generated copies. `dist/` is the public distribution consumed by the catalog and CDN.

## Add an icon

Put an SVG anywhere under `src/icons/`. You do not need to assign an ID manually. The builder generates one for a new source file; existing embedded IDs are preserved. If two source files have the same public name, validation stops instead of silently replacing one.

## Build and validate

```bash
npm install
npm run validate
npm run build
```

`npm run validate` is read-only. `npm run build` regenerates `dist/`, the registry copies, ESM icon modules, duplicate report, and runtime distribution.

## Browser usage

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_GITHUB_OWNER/YOUR_GITHUB_REPO@main/dist/delluna.js"></script>
<delluna-icon name="home"></delluna-icon>
<delluna-icon name="math/plus"></delluna-icon>
```

The runtime loads the registry once and fetches only requested SVGs. Variants `og`, `hud`, `orbit`, `circuit`, and `plasma` remain supported.

## Admin publishing

The Admin Portal provides persistent browser-backed upload batches, local analysis with live progress, SVG previews, conflict resolution, existing-icon rename/push, delete/push, favorites, collections, GitHub workflow status, responsive mobile navigation, folder creation/move/copy operations, editable upload destinations, and production-friendly error/success states.

The publishing path is:

`Admin → Cloudflare Worker → GitHub commit → GitHub Actions validation/build → dist → CDN`

The Worker updates the configured branch with `force: true` as requested by the administrative publishing workflow. Admin publishes both canonical registry copies so the build validation step cannot fail because `registry.json` and `registry/icons.json` are stale. The UI tracks the source commit separately from the later Actions/CDN build state; a successful source commit is not presented as a completed public build until Actions succeeds.
