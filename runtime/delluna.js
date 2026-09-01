(function () {
  'use strict';

  const scriptSrc = document.currentScript?.src || '';
  const detectedBase = scriptSrc
    .replace(/\/delluna(?:\.min)?\.js(?:[?#].*)?$/, '')
    .replace(/\/$/, '');

  const defaults = {
    base: detectedBase,
    variant: 'og',
    color: 'currentColor',
    fill: 0,
    wght: 400,
    grad: 0,
    opsz: 24,
    plasmaColors: null
  };

  let config = {
    global: Object.assign({}, defaults),
    variants: {},
    icons: {}
  };

  const cache = new Map();
  const pending = new Map();
  let registryCache = null;
  let registryPending = null;
  let uid = 0;

  function base() {
    return (Delluna.baseUrl || detectedBase).replace(/\/$/, '');
  }

  const families = {
    og: styleOg,
    hud: styleHud,
    orbit: styleOrbit,
    circuit: styleCircuit,
    plasma: stylePlasma
  };

  async function registry() {
    if (registryCache) return registryCache;
    if (registryPending) return registryPending;

    const registryUrl = base() + '/registry.json';
    registryPending = fetch(registryUrl, { cache: 'no-cache' })
      .then(response => {
        if (!response.ok) throw new Error('Delluna registry unavailable: ' + response.status);
        return response.json();
      })
      .then(data => {
        registryCache = data;
        registryPending = null;
        return data;
      })
      .catch(error => {
        registryPending = null;
        throw error;
      });

    return registryPending;
  }

  async function resolveItem(name) {
    const r = await registry();
    let item = r.icons?.[name];
    if (item?.aliasOf) item = r.icons?.[item.aliasOf];
    if (!item && r.aliases?.[name]) item = r.icons?.[r.aliases[name]];
    return item || null;
  }

  async function url(name) {
    const item = await resolveItem(name);
    if (!item) throw new Error('Delluna icon not found: ' + name);
    const file = item.file || item.path || ('icons/' + name + '.svg');
    const cleanFile = String(file).replace(/^\/+/, '').replace(/^src\/icons\//, '');
    return base() + '/' + cleanFile.split('/').map(encodeURIComponent).join('/');
  }

  function parseSvg(str) {
    const m = str.match(/^<svg([^>]*)>([\s\S]*)<\/svg>$/);
    if (!m) return null;
    let attrs = m[1];
    const vbm = attrs.match(/viewBox="([^"]+)"/i);
    const vb = vbm ? vbm[1] : '0 0 24 24';
    const p = vb.trim().split(/\s+/).map(Number);
    attrs = attrs.replace(/\s*viewBox="[^"]*"/i, '').trim();
    return { attrs, inner: m[2], w: p[2] || 24, h: p[3] || 24 };
  }

  function roundify(p) {
    let attrs = p.attrs
      .replace(/\s*stroke-linecap="[^"]*"/gi, '')
      .replace(/\s*stroke-linejoin="[^"]*"/gi, '');
    attrs = (attrs + ' stroke-linecap="round" stroke-linejoin="round"').trim();

    const inner = p.inner.replace(/<rect\b[^>]*\/>/gi, tag => {
      const wm = tag.match(/width="([\d.]+)"/i);
      const hm = tag.match(/height="([\d.]+)"/i);
      const minWH = Math.min(wm ? +wm[1] : p.w, hm ? +hm[1] : p.h);
      const minRx = +(minWH * 0.3).toFixed(2);
      if (/rx="([\d.]+)"/i.test(tag)) {
        return tag.replace(/rx="([\d.]+)"/i, (match, value) => `rx="${Math.max(+value, minRx)}"`);
      }
      return tag.replace(/\/>$/, ` rx="${minRx}"/>`);
    });

    return { attrs, inner, w: p.w, h: p.h };
  }

  function clamp(v, a, b) {
    return Math.min(b, Math.max(a, v));
  }

  function mult(c) {
    const w = clamp(+c.wght || 400, 100, 700);
    const g = clamp(+c.grad || 0, -25, 200);
    const f = clamp(+c.fill || 0, 0, 1);
    const o = clamp(+c.opsz || 24, 16, 48);
    const m = (w + g) / 400 + f * 1.3;
    return clamp(m * Math.pow(24 / o, 0.2), 0.35, 3.2);
  }

  function weight(p, m) {
    if (Math.abs(m - 1) < 0.001) return p;
    const scale = value => value.replace(/stroke-width="([\d.]+)"/gi, (match, value) =>
      `stroke-width="${(+value * m).toFixed(2)}"`
    );
    return { attrs: scale(p.attrs), inner: scale(p.inner), w: p.w, h: p.h };
  }

  function styleOg(p) {
    return `<svg viewBox="0 0 ${p.w} ${p.h}"><g ${p.attrs}>${p.inner}</g></svg>`;
  }

  function styleHud(p) {
    const w = p.w, h = p.h;
    const m = +(w * 0.07).toFixed(2);
    const len = +(w * 0.16).toFixed(2);
    const r = +(w * 0.045).toFixed(2);
    const sw = +(w * 0.045).toFixed(2);

    function c(x, y, hd, vd) {
      const x1 = +(x + hd * len).toFixed(2);
      const y2 = +(y + vd * len).toFixed(2);
      const rx = +(x + hd * r).toFixed(2);
      const ry = +(y + vd * r).toFixed(2);
      return `M${x1} ${y} L${rx} ${y} Q${x} ${y} ${x} ${ry} L${x} ${y2}`;
    }

    const d = c(m, m, 1, 1) + ' ' + c(w - m, m, -1, 1) + ' ' +
      c(w - m, h - m, -1, -1) + ' ' + c(m, h - m, 1, -1);

    return `<svg viewBox="0 0 ${w} ${h}">
      <g ${p.attrs}>${p.inner}</g>
      <path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}"
        stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
    </svg>`;
  }

  function styleOrbit(p) {
    const w = p.w, h = p.h;
    const cx = w / 2, cy = h / 2;
    const rx = +(w * 0.49).toFixed(2);
    const ry = +(h * 0.23).toFixed(2);
    const scale = 0.76;
    const dx = +(w * (1 - scale) / 2).toFixed(2);
    const dy = +(h * (1 - scale) / 2).toFixed(2);
    const ang = -20 * Math.PI / 180;
    const dotx = +(cx + rx * Math.cos(ang)).toFixed(2);
    const doty = +(cy + ry * Math.sin(ang)).toFixed(2);
    const r = +(w * 0.045).toFixed(2);
    const sw = +(w * 0.026).toFixed(2);

    return `<svg viewBox="0 0 ${w} ${h}">
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none"
        stroke="currentColor" stroke-width="${sw}" opacity="0.4"
        transform="rotate(-18 ${cx} ${cy})"/>
      <g transform="translate(${dx} ${dy}) scale(${scale})" ${p.attrs}>${p.inner}</g>
      <circle cx="${dotx}" cy="${doty}" r="${r}" fill="currentColor"/>
    </svg>`;
  }

  function styleCircuit(p) {
    const w = p.w, h = p.h;
    const m = +(w * 0.1).toFixed(2);
    const r = +(w * 0.05).toFixed(2);

    return `<svg viewBox="0 0 ${w} ${h}">
      <g ${p.attrs}>${p.inner}</g>
      <g fill="currentColor" opacity="0.55">
        <circle cx="${m}" cy="${m}" r="${r}"/>
        <circle cx="${w - m}" cy="${h - m}" r="${r}"/>
      </g>
    </svg>`;
  }

  function stylePlasma(p, c) {
    const w = p.w, h = p.h;
    const gid = 'delluna-p' + uid++;
    const colors = c.plasmaColors;
    const stops = colors && colors.length
      ? colors.map((x, i) =>
          `<stop offset="${(colors.length === 1 ? 0 : i / (colors.length - 1)).toFixed(2)}" stop-color="${x}"/>`
        ).join('')
      : '<stop offset="0" stop-color="var(--delluna-plasma-center,#ffffff)"/>' +
        '<stop offset="1" stop-color="var(--delluna-plasma-edge,#ffffff)"/>';

    const grad = `<radialGradient id="${gid}" cx="50%" cy="50%" r="50%">${stops}</radialGradient>`;
    const attrs = p.attrs.replace(/currentColor/g, `url(#${gid})`);
    const sx = +(w * 0.8).toFixed(2);
    const sy = +(h * 0.2).toFixed(2);
    const r = +(w * 0.05).toFixed(2);

    return `<svg viewBox="0 0 ${w} ${h}">
      <defs>${grad}</defs>
      <g ${attrs}>${p.inner}</g>
      <circle cx="${sx}" cy="${sy}" r="${(r * 2.4).toFixed(2)}" fill="url(#${gid})" opacity="0.22"/>
      <circle cx="${sx}" cy="${sy}" r="${r}" fill="url(#${gid})"/>
    </svg>`;
  }

  function resolve(name, extra) {
    const ic = Object.assign({}, config.icons[name] || {}, extra || {});
    const v = ic.variant || config.global.variant || 'og';
    const vc = config.variants[v] || {};
    const out = { variant: families[v] ? v : 'og' };

    ['fill', 'wght', 'grad', 'opsz', 'color', 'background', 'plasmaColors'].forEach(key => {
      out[key] = ic[key] !== undefined ? ic[key] : (vc[key] !== undefined ? vc[key] : config.global[key]);
    });

    return out;
  }

  async function load(name) {
    const item = await resolveItem(name);
    if (!item) throw new Error('Delluna icon not found: ' + name);
    const key = item.id || name;

    if (cache.has(key)) return cache.get(key);
    if (pending.has(key)) return pending.get(key);

    const promise = url(name)
      .then(iconUrl => fetch(iconUrl))
      .then(response => {
        if (!response.ok) throw new Error('Delluna icon not found: ' + name);
        return response.text();
      })
      .then(svg => {
        cache.set(key, svg);
        pending.delete(key);
        return svg;
      })
      .catch(error => {
        pending.delete(key);
        throw error;
      });

    pending.set(key, promise);
    return promise;
  }

  async function render(name, extra) {
    const raw = await load(name);
    const parsed = parseSvg(raw);
    if (!parsed) return raw;

    const c = resolve(name, extra);
    const family = families[c.variant] || styleOg;
    let svg = family(weight(roundify(parsed), mult(c)), c);

    if (c.color && c.color !== 'currentColor') {
      const safeColor = String(c.color).replace(/["<>]/g, '');
      svg = svg.replace('<svg ', `<svg style="color:${safeColor}" `);
    }

    return svg;
  }

  async function paint(el) {
    const name = el.getAttribute('name') || el.getAttribute('data-icon');
    if (!name) return;

    try {
      const svg = await render(name, { variant: el.getAttribute('variant') || undefined });
      el.innerHTML = svg;
      el.setAttribute('data-icon-painted', name);
      el.removeAttribute('data-delluna-error');
    } catch (error) {
      el.innerHTML = '';
      el.setAttribute('data-delluna-error', error.message || 'Delluna error');
      el.dispatchEvent(new CustomEvent('delluna-error', { detail: error }));
      if (window.DellunaDebug || window.DELLUNA_DEBUG) {
        console.error('[Delluna]', name, error);
      }
    }
  }

  class DellunaIcon extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'variant'];
    }
    connectedCallback() {
      paint(this);
    }
    attributeChangedCallback() {
      if (this.isConnected) paint(this);
    }
  }

  if (!customElements.get('delluna-icon')) {
    customElements.define('delluna-icon', DellunaIcon);
  }

  function repaint() {
    document.querySelectorAll('delluna-icon,[data-icon]').forEach(paint);
  }

  const Delluna = {
    baseUrl: detectedBase,
    configure(c) {
      c = c || {};
      if (c.baseUrl !== undefined) {
        this.baseUrl = String(c.baseUrl || '').replace(/\/$/, '');
      }
      if (c.variant !== undefined) {
        config.global.variant = c.variant;
      }
      ['fill', 'wght', 'grad', 'opsz', 'color', 'background', 'plasmaColors'].forEach(key => {
        if (c[key] !== undefined) config.global[key] = c[key];
      });
      if (c.variants) {
        Object.keys(c.variants).forEach(variant => {
          config.variants[variant] = Object.assign({}, config.variants[variant], c.variants[variant]);
        });
      }
      if (c.icons) {
        Object.keys(c.icons).forEach(name => {
          config.icons[name] = Object.assign({}, config.icons[name], c.icons[name]);
        });
      }
      repaint();
    },
    reset() {
      config = {
        global: Object.assign({}, defaults),
        variants: {},
        icons: {}
      };
      this.baseUrl = detectedBase;
      registryCache = null;
      registryPending = null;
      cache.clear();
      pending.clear();
      repaint();
    },
    resolve,
    render,
    load,
    clearCache() {
      cache.clear();
      registryCache = null;
      registryPending = null;
    },
    variants: Object.keys(families),
    iconUrl: url,
    registry,
    resolveItem
  };

  window.Delluna = Delluna;
  window.DexIcons = Delluna;

  window.dexIcon = function (name, cls) {
    const safeName = String(name).replace(/"/g, '&quot;');
    const safeClass = cls ? String(cls).replace(/"/g, '') : '';
    return `<delluna-icon name="${safeName}"${safeClass ? ` class="${safeClass}"` : ''}></delluna-icon>`;
  };

  new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.matches && node.matches('delluna-icon,[data-icon]')) paint(node);
        if (node.querySelectorAll) {
          node.querySelectorAll('delluna-icon,[data-icon]').forEach(paint);
        }
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
