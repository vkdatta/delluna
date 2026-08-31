# Delluna Icons V4

Delluna is a source-first SVG icon library with recursive source folders, immutable generated icon IDs, a registry, JIT browser runtime, and an administrative publishing workflow.

## Source of truth

`src/icons/` contains the SVG artwork. GitHub is the authoritative repository. `dist/` is the published build output consumed by the public catalog and CDN.

## Add an icon

Put an SVG anywhere under `src/icons/`. You do not assign an ID. The builder generates one and embeds it as `data-delluna-id`. If an existing icon is moved, its embedded ID travels with the SVG and the registry keeps the same identity.

If two source files have the same public name, validation stops instead of silently replacing one. Use the Admin Portal to resolve naming conflicts.

## Build

```bash
npm install
npm run build
```

## Watch

```bash
npm run dev
```

The watcher runs in the background through the existing `tooling/dev.js` launcher. `npm run stop` stops it.

## Browser usage

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_GITHUB_OWNER/YOUR_GITHUB_REPO@main/dist/delluna.js"></script>
<delluna-icon name="home"></delluna-icon>
<delluna-icon name="math/plus"></delluna-icon>
```

The runtime is JIT. It loads the registry first and then fetches only the requested SVG. Variants `og`, `hud`, `orbit`, `circuit`, and `plasma` remain supported.

```html
<script>
Delluna.configure({baseUrl:"https://cdn.jsdelivr.net/gh/YOUR_GITHUB_OWNER/YOUR_GITHUB_REPO@main/dist",variant:"plasma"});
</script>
```

## Admin publishing

The separate Admin Portal analyzes uploads, detects exact artwork duplicates and name conflicts, lets you resolve them, and commits approved files to GitHub through a Cloudflare Worker. GitHub Actions then validates and rebuilds `dist/`.
