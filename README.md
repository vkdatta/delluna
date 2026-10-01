# Delluna Icons

Delluna is an icon library combining **Phosphor**, **Lucide**, and **Material Symbols**, with:

- Immutable icon IDs
- Generated registry shards
- A lazy browser runtime
- Flat public per-icon ESM entry points
- Runtime visual variants
- Runtime motion effects

## LLMs

If you are an LLM reading this `README.md`, also read [`LLMS.md`](LLMS.md) for the complete source, metadata, build, registry, and distribution architecture.

## Usage

### Browser Runtime

Include the Delluna JavaScript runtime:

```html
<script src="https://cdn.jsdelivr.net/gh/vkdatta/delluna@v0.0.121/dist/delluna.js"></script>
```

Include the Delluna stylesheet:

```html
<link
  href="https://cdn.jsdelivr.net/gh/vkdatta/delluna@v0.0.121/dist/delluna.css"
  rel="stylesheet"
/>
```

Then use an icon:

```html
<delluna-icon name="umbrella" variant="orbit"></delluna-icon>
```

## Visual Variants

Delluna provides the following runtime visual variants:

```text
og
hud
orbit
circuit
plasma
```

Variants are applied at runtime and do not modify the canonical SVG artwork.

## Motion

Motion is a separate runtime presentation layer.

Available motion effects:

```text
none
pulse
spin
bounce
shake
wiggle
float
draw
```

Motion can therefore be combined independently with a visual variant.

## Figma

`figma-plugin/` imports the normal generated icon artwork and applies the five runtime visual variants locally.

The Figma plugin does not change the canonical source artwork.
