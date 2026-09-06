// DexIcons — a portable, runtime-configurable icon engine. Every icon
// site-wide (buttons, menus, sidebars, toolbars) is drawn in this one file:
// inline SVG, stroke/fill=currentColor by default, so a single CSS `color`
// paints it. No external icon fonts/libraries are ever loaded.
//
// Each icon has 5 selectable "variants" built from one shared, rounded-corner
// base geometry: og (plain), hud (scanner-bracket corners), orbit (satellite
// ring), circuit (corner nodes), plasma (radial glow, theme-reactive via
// --dex-plasma-center/--dex-plasma-edge CSS vars). Variants and the
// Material-Symbols-style fill/wght/grad/opsz axes are configurable at 3
// cascading levels — per icon, per variant, or globally — via
// `DexIcons.configure({...})`. See icon-config.js for this site's config.
//
// Usage (unchanged from before):
//   IC.folder                     -> raw <svg>...</svg> string, for building
//                                     HTML strings ('<div>' + IC.folder + '</div>')
//   window.dexIcon('folder')      -> same, wrapped in a sized <span class="ic-icon">
//   <i data-icon="folder"></i>    -> auto-painted on load and whenever added later
//   DexIcons.configure({ variant: 'plasma', icons: { tune: { variant: 'og' } } })
if (!window.IC) {
  var ICONS_RAW = {};
  var ALIASES = {};

  // ---- geometry: parse an <svg>...</svg> string into attrs/inner/size ----
  function parseSvg(str) {
    var m = str.match(/^<svg([^>]*)>([\s\S]*)<\/svg>$/);
    if (!m) return null;
    var attrs = m[1];
    var vbm = attrs.match(/viewBox="([^"]+)"/);
    var vb = vbm ? vbm[1] : '0 0 24 24';
    var parts = vb.trim().split(/\s+/).map(Number);
    attrs = attrs.replace(/\s*viewBox="[^"]*"/, '').trim();
    return { attrs: attrs, inner: m[2], w: parts[2], h: parts[3] };
  }

  // Shared "rounded, minimal straight lines" base every variant builds on:
  // forces round line joins/caps (sharp corners render as soft arcs) and
  // grows rect corner radii, without touching path data.
  function roundify(p) {
    var attrs = p.attrs
      .replace(/\s*stroke-linecap="[^"]*"/g, '')
      .replace(/\s*stroke-linejoin="[^"]*"/g, '');
    attrs = (attrs + ' stroke-linecap="round" stroke-linejoin="round"').trim();
    var inner = p.inner.replace(/<rect\b[^>]*\/>/g, function (tag) {
      var wm = tag.match(/width="([\d.]+)"/), hm = tag.match(/height="([\d.]+)"/);
      var minWH = Math.min(wm ? +wm[1] : p.w, hm ? +hm[1] : p.h);
      var minRx = +(minWH * 0.3).toFixed(2);
      if (/rx="([\d.]+)"/.test(tag)) {
        return tag.replace(/rx="([\d.]+)"/, function (m2, val) { return 'rx="' + Math.max(+val, minRx) + '"'; });
      }
      return tag.replace(/\/>$/, ' rx="' + minRx + '"/>');
    });
    return { attrs: attrs, inner: inner, w: p.w, h: p.h };
  }

  // ---- fill/wght/grad/opsz axes -> a single stroke-width multiplier ----
  function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }

  function axisMultiplier(cfg) {
    var wght = clamp(+cfg.wght || 400, 100, 700);
    var grad = clamp(+cfg.grad || 0, -25, 200);
    var fill = clamp(+cfg.fill || 0, 0, 1);
    var opsz = clamp(+cfg.opsz || 24, 16, 48);
    var m = (wght + grad) / 400;
    m += fill * 1.3; // FILL is approximated as extra weight (no dual artwork yet)
    m *= Math.pow(24 / opsz, 0.2); // small legibility compensation at small sizes
    return clamp(m, 0.35, 3.2);
  }

  function applyWeight(p, mult) {
    if (Math.abs(mult - 1) < 0.001) return p;
    function scale(str) {
      return str.replace(/stroke-width="([\d.]+)"/g, function (m, v) {
        return 'stroke-width="' + (+v * mult).toFixed(2) + '"';
      });
    }
    return { attrs: scale(p.attrs), inner: scale(p.inner), w: p.w, h: p.h };
  }

  // ---- the 5 variant renderers ----
  function styleOg(p) {
    return '<svg viewBox="0 0 ' + p.w + ' ' + p.h + '"><g ' + p.attrs + '>' + p.inner + '</g></svg>';
  }

  function styleHud(p) {
    var w = p.w, h = p.h;
    var m = +(w * 0.07).toFixed(2), len = +(w * 0.16).toFixed(2), r = +(w * 0.045).toFixed(2), sw = +(w * 0.045).toFixed(2);
    function corner(x, y, hDir, vDir) {
      var x1 = +(x + hDir * len).toFixed(2), y2 = +(y + vDir * len).toFixed(2);
      var rx = +(x + hDir * r).toFixed(2), ry = +(y + vDir * r).toFixed(2);
      return 'M' + x1 + ' ' + y + ' L' + rx + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + ry + ' L' + x + ' ' + y2;
    }
    var d = corner(m, m, 1, 1) + ' ' + corner(w - m, m, -1, 1) + ' ' + corner(w - m, h - m, -1, -1) + ' ' + corner(m, h - m, 1, -1);
    return '<svg viewBox="0 0 ' + w + ' ' + h + '"><g ' + p.attrs + '>' + p.inner + '</g>' +
      '<path d="' + d + '" fill="none" stroke="currentColor" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>';
  }

  function styleOrbit(p) {
    var w = p.w, h = p.h, cx = w / 2, cy = h / 2;
    var rx = +(w * 0.49).toFixed(2), ry = +(h * 0.23).toFixed(2);
    var scale = 0.76, dx = +(w * (1 - scale) / 2).toFixed(2), dy = +(h * (1 - scale) / 2).toFixed(2);
    var ang = -20 * Math.PI / 180;
    var dotx = +(cx + rx * Math.cos(ang)).toFixed(2), doty = +(cy + ry * Math.sin(ang)).toFixed(2);
    var r = +(w * 0.045).toFixed(2), sw = +(w * 0.026).toFixed(2);
    return '<svg viewBox="0 0 ' + w + ' ' + h + '"><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="none" stroke="currentColor" stroke-width="' + sw + '" opacity="0.4" transform="rotate(-18 ' + cx + ' ' + cy + ')"/>' +
      '<g transform="translate(' + dx + ' ' + dy + ') scale(' + scale + ')" ' + p.attrs + '>' + p.inner + '</g>' +
      '<circle cx="' + dotx + '" cy="' + doty + '" r="' + r + '" fill="currentColor"/></svg>';
  }

  function styleCircuit(p) {
    var w = p.w, h = p.h;
    var m = +(w * 0.1).toFixed(2), r = +(w * 0.05).toFixed(2);
    return '<svg viewBox="0 0 ' + w + ' ' + h + '"><g ' + p.attrs + '>' + p.inner + '</g>' +
      '<g fill="currentColor" opacity="0.55"><circle cx="' + m + '" cy="' + m + '" r="' + r + '"/><circle cx="' + (w - m) + '" cy="' + (h - m) + '" r="' + r + '"/></g></svg>';
  }

  // Default colors are CSS custom properties (see icons.css), not baked hex,
  // so already-rendered Plasma icons repaint live when the page's data-theme
  // attribute flips — no JS re-render required. `colors` (from config) is an
  // explicit override that skips the CSS vars entirely.
  function stylePlasma(p, ctx) {
    var w = p.w, h = p.h, gid = 'p' + ctx.uid, colors = ctx.plasmaColors;
    var stops;
    if (colors && colors.length) {
      stops = colors.map(function (c, i) {
        var off = colors.length === 1 ? 0 : i / (colors.length - 1);
        return '<stop offset="' + off.toFixed(2) + '" stop-color="' + c + '"/>';
      }).join('');
    } else {
      stops = '<stop offset="0" stop-color="var(--dex-plasma-center,#ffffff)"/>' +
        '<stop offset="1" stop-color="var(--dex-plasma-edge,#ffffff)"/>';
    }
    var grad = '<radialGradient id="' + gid + '" cx="50%" cy="50%" r="50%">' + stops + '</radialGradient>';
    var gAttrs = p.attrs.replace(/currentColor/g, 'url(#' + gid + ')');
    var sx = +(w * 0.8).toFixed(2), sy = +(h * 0.2).toFixed(2), r = +(w * 0.05).toFixed(2);
    return '<svg viewBox="0 0 ' + w + ' ' + h + '"><defs>' + grad + '</defs><g ' + gAttrs + '>' + p.inner + '</g>' +
      '<circle cx="' + sx + '" cy="' + sy + '" r="' + (r * 2.4).toFixed(2) + '" fill="url(#' + gid + ')" opacity="0.22"/>' +
      '<circle cx="' + sx + '" cy="' + sy + '" r="' + r + '" fill="url(#' + gid + ')"/></svg>';
  }

  var FAMILIES = { og: styleOg, hud: styleHud, orbit: styleOrbit, circuit: styleCircuit, plasma: stylePlasma };

  // ---- 3-tier config: icon override -> variant override -> global default ----
  var CONFIG_KEYS = ['fill', 'wght', 'grad', 'opsz', 'color', 'background', 'plasmaColors'];
  var CONFIG = {
    global: { variant: 'og', fill: 0, wght: 400, grad: 0, opsz: 24, color: 'currentColor', background: null, plasmaColors: null },
    variants: {},
    icons: {}
  };

  function resolveConfig(name) {
    var ic = CONFIG.icons[name] || {};
    var variant = ic.variant || CONFIG.global.variant || 'og';
    var vc = CONFIG.variants[variant] || {};
    var out = { variant: FAMILIES[variant] ? variant : 'og' };
    CONFIG_KEYS.forEach(function (k) {
      if (ic[k] !== undefined) out[k] = ic[k];
      else if (vc[k] !== undefined) out[k] = vc[k];
      else out[k] = CONFIG.global[k];
    });
    return out;
  }

  // Every render call gets its own uid, even for repeat renders of the same
  // icon name — the plasma variant turns this into an SVG gradient id, and
  // an icon painted in more than one place on the page (e.g. "code" in both
  // the mermaid bottombar and sidebar2, "folder_open" in both a hidden
  // diffusion pane header and a visible sidebar2 row) would otherwise share
  // that id. When the first DOM instance of a shared id sits inside a
  // display:none ancestor, browsers can fail to resolve url(#id) for every
  // other instance too, leaving them unpainted.
  var renderUid = 0;

  function renderIcon(name) {
    var raw = ICONS_RAW[name];
    if (!raw) return '';
    var parsed = parseSvg(raw);
    if (!parsed) return raw;
    var cfg = resolveConfig(name);
    var base = roundify(parsed);
    var weighted = applyWeight(base, axisMultiplier(cfg));
    var svg = (FAMILIES[cfg.variant] || styleOg)(weighted, { uid: name + '-' + (renderUid++), plasmaColors: cfg.plasmaColors });
    if (cfg.color && cfg.color !== 'currentColor') {
      svg = svg.replace('<svg ', '<svg style="color:' + String(cfg.color).replace(/"/g, '') + '" ');
    }
    return svg;
  }

  function repaintAll() {
    if (typeof document === 'undefined') return;
    document.querySelectorAll('[data-icon-painted]').forEach(function (el) { el.removeAttribute('data-icon-painted'); });
    hydrate(document);
  }

  window.DexIcons = {
    configure: function (cfg) {
      cfg = cfg || {};
      ['variant'].concat(CONFIG_KEYS).forEach(function (k) { if (cfg[k] !== undefined) CONFIG.global[k] = cfg[k]; });
      if (cfg.variants) {
        Object.keys(cfg.variants).forEach(function (v) {
          CONFIG.variants[v] = Object.assign({}, CONFIG.variants[v], cfg.variants[v]);
        });
      }
      if (cfg.icons) {
        Object.keys(cfg.icons).forEach(function (name) {
          CONFIG.icons[name] = Object.assign({}, CONFIG.icons[name], cfg.icons[name]);
        });
      }
      repaintAll();
    },
    reset: function () {
      CONFIG = { global: { variant: 'og', fill: 0, wght: 400, grad: 0, opsz: 24, color: 'currentColor', background: null, plasmaColors: null }, variants: {}, icons: {} };
      repaintAll();
    },
    resolve: resolveConfig,
    getConfig: function () { return JSON.parse(JSON.stringify(CONFIG)); },
    variantNames: Object.keys(FAMILIES),
    iconNames: Object.keys(ICONS_RAW).concat(Object.keys(ALIASES))
  };

  var IC = new Proxy({}, {
    get: function (target, prop) {
      if (typeof prop !== 'string') return undefined;
      var key = ALIASES[prop] || prop;
      if (!ICONS_RAW.hasOwnProperty(key)) return undefined;
      return renderIcon(key);
    },
    has: function (target, prop) { return ICONS_RAW.hasOwnProperty(prop) || ALIASES.hasOwnProperty(prop); },
    ownKeys: function () { return window.DexIcons.iconNames; },
    getOwnPropertyDescriptor: function () { return { enumerable: true, configurable: true }; }
  });
  window.IC = IC;

  window.dexIcon = function (name, extraClass) {
    var body = IC[name] || '';
    return '<span class="ic-icon' + (extraClass ? ' ' + extraClass : '') + '" data-icon="' + name + '">' + body + '</span>';
  };

  function paintOne(el) {
    var name = el.getAttribute('data-icon');
    if (!name) return;
    if (el.getAttribute('data-icon-painted') === name) return;
    var svg = IC[name];
    if (!svg) return;
    el.innerHTML = svg;
    el.classList.add('ic-icon');
    el.setAttribute('data-icon-painted', name);
  }

  function hydrate(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(paintOne);
  }
  window.dexHydrateIcons = hydrate;

  function boot() {
    hydrate(document);
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var added = muts[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType !== 1) continue;
          if (node.hasAttribute && node.hasAttribute('data-icon')) paintOne(node);
          if (node.querySelectorAll) hydrate(node);
        }
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
  if (document.body) boot();
  else document.addEventListener('DOMContentLoaded', boot, { once: true });
}
