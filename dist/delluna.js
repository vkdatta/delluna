(function(){
'use strict';

const RUNTIME_SCRIPT=document.currentScript;

const AUTO_BASE=(()=>{
    if(!RUNTIME_SCRIPT||!RUNTIME_SCRIPT.src){
        return '';
    }

    try{
        return new URL('./',RUNTIME_SCRIPT.src).href.replace(/\/+$/,'');
    }catch(e){
        return String(RUNTIME_SCRIPT.src)
            .replace(/\/delluna(?:\.min)?\.js(?:\?.*)?$/i,'')
            .replace(/\/+$/,'');
    }
})();

const DEFAULTS={
    base:'',
    variant:'og',
    style:'single',
    motion:'none',
    color:'currentColor',
    secondary:'currentColor',
    fill:0,
    wght:400,
    grad:0,
    opsz:24,
    background:'transparent',
    plasmaColors:null
};

let config={
    global:Object.assign({},DEFAULTS),
    variants:{},
    icons:{}
};

const cache=new Map();
const pending=new Map();

let registryCache=null;
let registryPending=null;
let uid=0;

const families={
    og:styleOg,
    hud:styleHud,
    orbit:styleOrbit,
    circuit:styleCircuit,
    plasma:stylePlasma
};

function normalizeBase(value){
    return String(value||'')
        .trim()
        .replace(/\/+$/,'');
}

function getBase(){
    if(Delluna.baseUrl){
        return normalizeBase(Delluna.baseUrl);
    }

    if(config.global.base){
        return normalizeBase(config.global.base);
    }

    return normalizeBase(AUTO_BASE);
}

function requireBase(){
    const value=getBase();

    if(!value){
        throw new Error(
            'Delluna base URL could not be determined. '+
            'The runtime must be loaded from a valid delluna.js URL.'
        );
    }

    return value;
}

function debug(){
    if(window.DellunaDebug&&console&&console.debug){
        console.debug.apply(
            console,
            ['[Delluna]'].concat(
                Array.from(arguments)
            )
        );
    }
}

async function registry(){
    if(registryCache){
        return registryCache;
    }

    if(registryPending){
        return registryPending;
    }

    const base=requireBase();

    const registryUrl=
        base+'/registry.json';

    debug(
        'Loading registry:',
        registryUrl
    );

    registryPending=
        fetch(
            registryUrl,
            {
                cache:'no-cache'
            }
        )
        .then(response=>{
            if(!response.ok){
                throw new Error(
                    `Delluna registry unavailable: HTTP ${response.status}`
                );
            }

            return response.json();
        })
        .then(data=>{
            registryCache=data;
            registryPending=null;

            debug(
                'Registry loaded:',
                data
            );

            return data;
        })
        .catch(error=>{
            registryPending=null;
            throw error;
        });

    return registryPending;
}

async function resolveItem(name){
    const r=await registry();

    let item=
        r.icons&&
        r.icons[name]
            ? r.icons[name]
            : null;

    if(item&&item.aliasOf){
        item=
            r.icons&&
            r.icons[item.aliasOf]
                ? r.icons[item.aliasOf]
                : null;
    }

    if(!item&&r.aliases&&r.aliases[name]){
        item=
            r.icons&&
            r.icons[r.aliases[name]]
                ? r.icons[r.aliases[name]]
                : null;
    }

    return item||null;
}

function iconFile(item,name){
    if(item&&item.file){
        return item.file;
    }

    if(item&&item.path){
        return item.path;
    }

    if(item&&item.filename){
        return item.filename;
    }

    return `icons/${name}.svg`;
}

function normalizeIconPath(file){
    return String(file||'')
        .replace(/^\/+/,'')
        .replace(/^dist\//i,'')
        .replace(/^src\/icons\//i,'icons/')
        .replace(/^src\/dist\//i,'');
}

async function url(name){
    const item=
        await resolveItem(name);

    if(!item){
        throw new Error(
            'Delluna icon not found: '+name
        );
    }

    const base=
        requireBase();

    const file=
        normalizeIconPath(
            iconFile(item,name)
        );

    const result=
        base+'/'+
        file
            .split('/')
            .filter(Boolean)
            .map(
                encodeURIComponent
            )
            .join('/') +
        (item.hash ? `?v=${encodeURIComponent(item.hash)}` : '');

    debug(
        'Icon URL:',
        result
    );

    return result;
}

function parseSvg(str){
    const match=
        String(str)
            .trim()
            .match(
                /^<svg\b([^>]*)>([\s\S]*)<\/svg>\s*$/i
            );

    if(!match){
        return null;
    }

    let attrs=match[1];
    const inner=match[2];

    const viewBoxMatch=
        attrs.match(
            /\bviewBox=["']([^"']+)["']/i
        );

    const viewBox=
        viewBoxMatch
            ? viewBoxMatch[1]
            : '0 0 24 24';

    const parts=
        viewBox
            .trim()
            .split(/\s+/)
            .map(Number);

    const w=
        Number.isFinite(parts[2])&&
        parts[2]>0
            ? parts[2]
            : 24;

    const h=
        Number.isFinite(parts[3])&&
        parts[3]>0
            ? parts[3]
            : 24;

    attrs=
        attrs
            .replace(
                /\s*viewBox=["'][^"']*["']/i,
                ''
            )
            .replace(
                /\s*(?:width|height)=["'][^"']*["']/gi,
                ''
            )
            .trim();

    return{
        attrs,
        inner,
        w,
        h
    };
}

function roundify(p){
    let attrs=
        p.attrs
            .replace(
                /\s*stroke-linecap=["'][^"']*["']/gi,
                ''
            )
            .replace(
                /\s*stroke-linejoin=["'][^"']*["']/gi,
                ''
            );

    attrs=(
        attrs+
        ' stroke-linecap="round" stroke-linejoin="round"'
    ).trim();

    const inner=
        p.inner.replace(
            /<rect\b[^>]*\/>/gi,
            tag=>{
                const wm=
                    tag.match(
                        /\bwidth=["']([\d.]+)["']/i
                    );

                const hm=
                    tag.match(
                        /\bheight=["']([\d.]+)["']/i
                    );

                const minWH=
                    Math.min(
                        wm?+wm[1]:p.w,
                        hm?+hm[1]:p.h
                    );

                const minRx=
                    +(minWH*.3).toFixed(2);

                if(
                    /rx=["']([\d.]+)["']/i.test(
                        tag
                    )
                ){
                    return tag.replace(
                        /rx=["']([\d.]+)["']/i,
                        (m,v)=>
                            `rx="${Math.max(+v,minRx)}"`
                    );
                }

                return tag.replace(
                    /\/>$/,
                    ` rx="${minRx}"/>`
                );
            }
        );

    return{
        attrs,
        inner,
        w:p.w,
        h:p.h
    };
}

function clamp(v,a,b){
    return Math.min(
        b,
        Math.max(a,v)
    );
}

function mult(c){
    const w=
        clamp(
            Number(c.wght)||400,
            100,
            700
        );

    const g=
        clamp(
            Number(c.grad)||0,
            -25,
            200
        );

    const f=
        clamp(
            Number(c.fill)||0,
            0,
            1
        );

    const o=
        clamp(
            Number(c.opsz)||24,
            16,
            48
        );

    const m=
        (w+g)/400+
        f*1.3;

    return clamp(
        m*Math.pow(24/o,.2),
        .35,
        3.2
    );
}

function weight(p,m){
    if(Math.abs(m-1)<.001){
        return p;
    }

    const scale=
        value=>
            value.replace(
                /stroke-width=["']([\d.]+)["']/gi,
                (a,v)=>
                    `stroke-width="${(+v*m).toFixed(2)}"`
            );

    return{
        attrs:scale(p.attrs),
        inner:scale(p.inner),
        w:p.w,
        h:p.h
    };
}

function styleOg(p){
    return`
<svg
    viewBox="0 0 ${p.w} ${p.h}"
    ${p.attrs}
>${p.inner}</svg>`;
}

function styleHud(p){
    const w=p.w;
    const h=p.h;

    const m=
        +(w*.07).toFixed(2);

    const len=
        +(w*.16).toFixed(2);

    const r=
        +(w*.045).toFixed(2);

    const sw=
        +(w*.045).toFixed(2);

    function corner(x,y,hd,vd){
        const x1=
            +(x+hd*len).toFixed(2);

        const y1=
            +(y+vd*len).toFixed(2);

        const rx=
            +(x+hd*r).toFixed(2);

        const ry=
            +(y+vd*r).toFixed(2);

        return`
M${x1} ${y}
L${rx} ${y}
Q${x} ${y} ${x} ${ry}
L${x} ${y1}`;
    }

    const d=
        corner(m,m,1,1)+' '+
        corner(w-m,m,-1,1)+' '+
        corner(w-m,h-m,-1,-1)+' '+
        corner(m,h-m,1,-1);

    return`
<svg viewBox="0 0 ${w} ${h}">
    <g ${p.attrs}>${p.inner}</g>
    <path
        d="${d}"
        fill="none"
        stroke="currentColor"
        stroke-width="${sw}"
        stroke-linecap="round"
        stroke-linejoin="round"
        opacity="0.7"
    />
</svg>`;
}

function styleOrbit(p){
    const w=p.w;
    const h=p.h;

    const cx=w/2;
    const cy=h/2;

    const rx=
        +(w*.49).toFixed(2);

    const ry=
        +(h*.23).toFixed(2);

    const scale=.76;

    const dx=
        +(w*(1-scale)/2).toFixed(2);

    const dy=
        +(h*(1-scale)/2).toFixed(2);

    const ang=
        -20*Math.PI/180;

    const dotx=
        +(cx+rx*Math.cos(ang)).toFixed(2);

    const doty=
        +(cy+ry*Math.sin(ang)).toFixed(2);

    const r=
        +(w*.045).toFixed(2);

    const sw=
        +(w*.026).toFixed(2);

    return`
<svg viewBox="0 0 ${w} ${h}">
    <ellipse
        cx="${cx}"
        cy="${cy}"
        rx="${rx}"
        ry="${ry}"
        fill="none"
        stroke="currentColor"
        stroke-width="${sw}"
        opacity="0.4"
        transform="rotate(-18 ${cx} ${cy})"
    />
    <g
        transform="translate(${dx} ${dy}) scale(${scale})"
        ${p.attrs}
    >${p.inner}</g>
    <circle
        cx="${dotx}"
        cy="${doty}"
        r="${r}"
        fill="currentColor"
    />
</svg>`;
}

function styleCircuit(p){
    const w=p.w;
    const h=p.h;

    const m=
        +(w*.1).toFixed(2);

    const r=
        +(w*.05).toFixed(2);

    return`
<svg viewBox="0 0 ${w} ${h}">
    <g ${p.attrs}>${p.inner}</g>
    <g
        fill="currentColor"
        opacity="0.55"
    >
        <circle
            cx="${m}"
            cy="${m}"
            r="${r}"
        />
        <circle
            cx="${w-m}"
            cy="${h-m}"
            r="${r}"
        />
    </g>
</svg>`;
}

function stylePlasma(p,c){
    const w=p.w;
    const h=p.h;

    const gid=
        'delluna-p'+uid++;

    const colors=
        Array.isArray(c.plasmaColors)
            ? c.plasmaColors
            : null;

    const stops=
        colors&&colors.length
            ? colors.map(
                (x,i)=>{
                    const safe=
                        String(x)
                            .replace(/["<>]/g,'');

                    const offset=
                        colors.length===1
                            ? 0
                            : i/(colors.length-1);

                    return`
<stop
    offset="${offset.toFixed(2)}"
    stop-color="${safe}"
/>`;
                }
            ).join('')
            :
            `
<stop
    offset="0"
    stop-color="var(--delluna-plasma-center,currentColor)"
/>
<stop
    offset="1"
    stop-color="var(--delluna-plasma-edge,currentColor)"
/>`;

    const gradient=`
<radialGradient
    id="${gid}"
    cx="50%"
    cy="50%"
    r="50%"
>${stops}</radialGradient>`;

    const attrs=
        p.attrs.replace(
            /currentColor/g,
            `url(#${gid})`
        );

    const sx=
        +(w*.8).toFixed(2);

    const sy=
        +(h*.2).toFixed(2);

    const r=
        +(w*.05).toFixed(2);

    return`
<svg viewBox="0 0 ${w} ${h}">
    <defs>${gradient}</defs>
    <g ${attrs}>${p.inner}</g>
    <circle
        cx="${sx}"
        cy="${sy}"
        r="${(r*2.4).toFixed(2)}"
        fill="url(#${gid})"
        opacity="0.22"
    />
    <circle
        cx="${sx}"
        cy="${sy}"
        r="${r}"
        fill="url(#${gid})"
    />
</svg>`;
}

function applyStyle(p, c){
    const style=String(c.style||'single').toLowerCase();
    const attrs=p.attrs||'';
    const inner=p.inner||'';
    const wrap=(body,extra='')=>`<svg viewBox="0 0 ${p.w} ${p.h}" ${extra}>${body}</svg>`;
    const clean=inner.replace(/\s*fill=["'](?:none|#[0-9a-f]{3,8}|rgba?\([^)]*\)|[a-z]+)["']/gi,'').replace(/\s*stroke=["'](?:none|#[0-9a-f]{3,8}|rgba?\([^)]*\)|[a-z]+)["']/gi,'').replace(/\s*style=["'][^"']*["']/gi,'');
    if(style==='outline') return wrap(inner,'fill="none" stroke="currentColor"');
    if(style==='single') return wrap(clean,'color="currentColor"');
    if(style==='fill') return wrap(clean.replace(/<([a-z][\w:-]*)([^>]*)>/gi,(m,t,a)=>{const self=/\/\s*$/.test(a);const attrs=a.replace(/\/\s*$/,'');return `<${t}${attrs} fill="currentColor" stroke="none"${self?'/':''}>`;}));
    if(style==='solid') return wrap(clean.replace(/stroke-width=["']([\d.]+)["']/gi,(_,v)=>`stroke-width="${(Number(v)*1.65).toFixed(2)}"`).replace(/<([a-z][\w:-]*)([^>]*)>/gi,(m,t,a)=>{const self=/\/\s*$/.test(a);const attrs=a.replace(/\/\s*$/,'');return `<${t}${attrs} fill="currentColor"${self?'/':''}>`;}));
    if(style==='duotone') return wrap(`<g opacity="0.18">${clean}</g><g>${clean}</g>`);
    if(style==='duocolor') return wrap(`<g style="color:${String(c.secondary||'currentColor').replace(/["<>]/g,'')}">${clean}</g><g opacity="0.95">${clean}</g>`);
    return wrap(inner,attrs);
}

function applyMotion(svg, motion){
    const m=String(motion||'none').toLowerCase();
    const allowed=new Set(['none','pulse','spin','bounce','shake','wiggle','float','draw']);
    if(!allowed.has(m)||m==='none') return svg;
    const style=`<style data-delluna-motion="${m}">@keyframes delluna-${m}{${m==='pulse'?'0%,100%{transform:scale(1)}50%{transform:scale(1.08)}':m==='spin'?'to{transform:rotate(360deg)}':m==='bounce'?'0%,100%{transform:translateY(0)}50%{transform:translateY(-8%)}':m==='shake'?'0%,100%{transform:translateX(0)}25%{transform:translateX(-5%)}75%{transform:translateX(5%)}':m==='wiggle'?'0%,100%{transform:rotate(0)}25%{transform:rotate(-4deg)}75%{transform:rotate(4deg)}':m==='float'?'0%,100%{transform:translateY(0)}50%{transform:translateY(-5%)}':'0%{stroke-dasharray:0 9999}100%{stroke-dasharray:9999 0}'}}@media(prefers-reduced-motion:reduce){:where(svg){animation:none!important}}</style>`;
    const timing=m==='draw'?'1.2s ease-out forwards':m==='spin'?'1.6s linear infinite':m==='pulse'?'1.4s ease-in-out infinite':'1.2s ease-in-out infinite';
    return svg.replace(/(<svg\b[^>]*>)/i, `$1${style}<g style="transform-box:fill-box;transform-origin:center;animation:delluna-${m} ${timing}">`).replace(/(<\/svg>\s*)$/i,'</g>$1');
}

function resolve(name,extra){
    const ic=
        Object.assign(
            {},
            config.icons[name]||{},
            extra||{}
        );

    const rawVariant = ic.variant !== undefined ? ic.variant : config.global.variant || 'og';
    const v = String(rawVariant).trim().toLowerCase();

    const vc=
        config.variants[v]||{};

    const out={
        variant:
            families[v]
                ? v
                : 'og'
    };

    [
        'style',
        'motion',
        'secondary',
        'fill',
        'wght',
        'grad',
        'opsz',
        'color',
        'background',
        'plasmaColors'
    ].forEach(key=>{
        out[key]=
            ic[key]!==undefined
                ? ic[key]
                : vc[key]!==undefined
                    ? vc[key]
                    : config.global[key];
    });

    return out;
}

async function load(name){
    const item=
        await resolveItem(name);

    if(!item){
        throw new Error(
            'Delluna icon not found: '+name
        );
    }

    const key=
        item.id||
        item.file||
        name;

    if(cache.has(key)){
        return cache.get(key);
    }

    if(pending.has(key)){
        return pending.get(key);
    }

    const request=
        url(name)
            .then(async iconUrl=>{
                const candidates=[iconUrl];
                // jsDelivr can occasionally serve an SVG with an image-hosting/content-type
                // edge failure. When the configured base is the public GitHub CDN, use
                // raw.githubusercontent.com as a second source without changing the API.
                const match=iconUrl.match(/^https:\/\/cdn\.jsdelivr\.net\/gh\/([^/]+)\/([^@/]+)@([^/]+)\/(dist\/.*)$/i);
                if(match){
                    candidates.push(`https://raw.githubusercontent.com/${match[1]}/${match[2]}/${match[3]}/${match[4]}`);
                }
                let lastError=null;
                for(const candidate of candidates){
                    try{
                        const response=await fetch(candidate,{cache:'default'});
                        if(response.ok) return response;
                        lastError=new Error(`HTTP ${response.status}`);
                    }catch(error){
                        lastError=error;
                    }
                }
                throw new Error(`Delluna SVG unavailable: ${lastError?.message||'network error'}`);
            })
            .then(response=>response.text())
            .then(text=>{
                cache.set(
                    key,
                    text
                );

                pending.delete(
                    key
                );

                return text;
            })
            .catch(error=>{
                pending.delete(
                    key
                );

                throw error;
            });

    pending.set(
        key,
        request
    );

    return request;
}

async function render(name,extra){
    const raw=
        await load(name);

    const parsed=
        parseSvg(raw);

    if(!parsed){
        return raw;
    }

    const c=
        resolve(
            name,
            extra
        );

    const painter=
        families[c.variant]||
        styleOg;

    let svg=
        painter(
            weight(
                roundify(parsed),
                mult(c)
            ),
            c
        );
    if(c.style && c.style !== 'single') {
        const styled=parseSvg(svg);
        if(styled) svg=applyStyle(styled,c);
    }
    svg=applyMotion(svg,c.motion);

    const safeColor=
        c.color
            ? String(c.color)
                .replace(/["<>]/g,'')
            : '';

    if(safeColor){
        svg=
            svg.replace(
                '<svg ',
                `<svg style="color:${safeColor}" `
            );
    }

    if(
        c.background&&
        c.background!=='transparent'
    ){
        const safeBackground=
            String(c.background)
                .replace(/["<>]/g,'');

        svg=
            svg.replace(
                '<svg ',
                `<svg style="background:${safeBackground};${safeColor?'color:'+safeColor+';':''}" `
            );
    }

    return svg;
}

function collectAttributes(el){
    const result={};

    const variant=
        el.getAttribute('variant');

    const style=el.getAttribute('style');
    const motion=el.getAttribute('motion');
    const secondary=el.getAttribute('secondary');

    const color=
        el.getAttribute('color');

    const fill=
        el.getAttribute('fill');

    const wght=
        el.getAttribute('wght');

    const grad=
        el.getAttribute('grad');

    const opsz=
        el.getAttribute('opsz');

    const background=
        el.getAttribute('background');

    if(variant!==null){
        result.variant=variant;
    }
    if(style!==null){ result.style=style; }
    if(motion!==null){ result.motion=motion; }
    if(secondary!==null){ result.secondary=secondary; }

    if(color!==null){
        result.color=color;
    }

    if(fill!==null){
        result.fill=fill;
    }

    if(wght!==null){
        result.wght=wght;
    }

    if(grad!==null){
        result.grad=grad;
    }

    if(opsz!==null){
        result.opsz=opsz;
    }

    if(background!==null){
        result.background=background;
    }

    return result;
}

async function paint(el){
    const name=
        el.getAttribute('name')||
        el.getAttribute('data-icon');

    if(!name){
        return;
    }

    const token=
        String(
            Number(el.__dellunaPaintToken||0)+1
        );

    el.__dellunaPaintToken=token;

    el.removeAttribute(
        'data-icon-error'
    );

    try{
        const svg=
            await render(
                name,
                collectAttributes(el)
            );

        if(
            String(el.__dellunaPaintToken)!==
            token
        ){
            return;
        }

        el.innerHTML=svg;

        el.setAttribute(
            'data-icon-painted',
            name
        );

        debug(
            'Painted:',
            name
        );
    }catch(error){
        if(
            String(el.__dellunaPaintToken)!==
            token
        ){
            return;
        }

        console.error(
            '[Delluna]',
            name,
            error
        );

        el.innerHTML='';

        el.setAttribute(
            'data-icon-error',
            error.message
        );

        el.dispatchEvent(
            new CustomEvent(
                'delluna-error',
                {
                    detail:error
                }
            )
        );
    }
}

function installStyles(){
    if(
        document.getElementById(
            'delluna-runtime-style'
        )
    ){
        return;
    }

    const style=
        document.createElement('style');

    style.id=
        'delluna-runtime-style';

    style.textContent=`
delluna-icon{
    display:inline-flex;
    width:1em;
    height:1em;
    min-width:1em;
    min-height:1em;
    line-height:0;
    vertical-align:middle;
    flex:0 0 auto;
}

delluna-icon>svg{
    display:block;
    width:100%;
    height:100%;
    max-width:100%;
    max-height:100%;
    overflow:visible;
}
`;

    (
        document.head||
        document.documentElement
    ).appendChild(style);
}

class DellunaIcon extends HTMLElement{

    static get observedAttributes(){
        return[
            'name',
            'variant',
            'style',
            'motion',
            'secondary',
            'color',
            'style',
            'motion',
            'secondary',
            'fill',
            'wght',
            'grad',
            'opsz',
            'background'
        ];
    }

    connectedCallback(){
        paint(this);
    }

    attributeChangedCallback(){
        if(this.isConnected){
            paint(this);
        }
    }
}

if(
    !customElements.get(
        'delluna-icon'
    )
){
    customElements.define(
        'delluna-icon',
        DellunaIcon
    );
}

function repaint(){
    document
        .querySelectorAll(
            'delluna-icon,[data-icon]'
        )
        .forEach(paint);
}

const Delluna={

    baseUrl:AUTO_BASE,

    configure(options){
        options=
            options||{};

        let baseChanged=false;

        if(
            options.baseUrl!==undefined
        ){
            this.baseUrl=
                normalizeBase(
                    options.baseUrl
                );

            config.global.base=
                this.baseUrl;

            baseChanged=true;
        }

        if(
            options.base!==undefined
        ){
            this.baseUrl=
                normalizeBase(
                    options.base
                );

            config.global.base=
                this.baseUrl;

            baseChanged=true;
        }

        if(
            options.variant!==undefined
        ){
            config.global.variant=
                options.variant;
        }

        [
            'style',
            'motion',
            'secondary',
            'fill',
            'wght',
            'grad',
            'opsz',
            'color',
            'background',
            'plasmaColors'
        ].forEach(key=>{
            if(
                options[key]!==undefined
            ){
                config.global[key]=
                    options[key];
            }
        });

        if(options.variants){
            Object.keys(
                options.variants
            ).forEach(v=>{
                config.variants[v]=
                    Object.assign(
                        {},
                        config.variants[v],
                        options.variants[v]
                    );
            });
        }

        if(options.icons){
            Object.keys(
                options.icons
            ).forEach(name=>{
                config.icons[name]=
                    Object.assign(
                        {},
                        config.icons[name],
                        options.icons[name]
                    );
            });
        }

        if(baseChanged){
            registryCache=null;
            registryPending=null;
        }

        repaint();

        return this;
    },

    reset(){
        config={
            global:Object.assign(
                {},
                DEFAULTS
            ),
            variants:{},
            icons:{}
        };

        this.baseUrl=
            AUTO_BASE;

        registryCache=null;
        registryPending=null;

        cache.clear();
        pending.clear();

        repaint();

        return this;
    },

    resolve,
    render,
    load,

    clearCache(){
        cache.clear();
        registryCache=null;
        registryPending=null;
    },

    variants:Object.keys(
        families
    ),
    styles:['single','outline','fill','solid','duotone','duocolor'],
    motions:['none','pulse','spin','bounce','shake','wiggle','float','draw'],

    iconUrl:url,
    registry,
    resolveItem
};

window.Delluna=
    Delluna;

window.DexIcons=
    Delluna;

window.dexIcon=
    function(name,cls){
        const safeName=
            String(name)
                .replace(/"/g,'&quot;');

        const safeClass=
            cls
                ? ` class="${String(cls).replace(/["<>]/g,'')}"`
                : '';

        return`
<delluna-icon
    name="${safeName}"${safeClass}
></delluna-icon>`;
    };

function autoConfigure(){
    if(
        window.DELLUNA_SITE&&
        window.DELLUNA_SITE.base
    ){
        Delluna.configure({
            baseUrl:
                window.DELLUNA_SITE.base
        });

        return;
    }

    Delluna.baseUrl=
        AUTO_BASE;

    config.global.base=
        AUTO_BASE;
}

installStyles();
autoConfigure();

const observer=
    new MutationObserver(
        mutations=>{
            mutations.forEach(
                mutation=>{
                    mutation.addedNodes.forEach(
                        node=>{
                            if(
                                node.nodeType!==1
                            ){
                                return;
                            }

                            if(
                                node.matches&&
                                node.matches(
                                    'delluna-icon,[data-icon]'
                                )
                            ){
                                paint(node);
                            }

                            if(
                                node.querySelectorAll
                            ){
                                node
                                    .querySelectorAll(
                                        'delluna-icon,[data-icon]'
                                    )
                                    .forEach(
                                        paint
                                    );
                            }
                        }
                    );
                }
            );
        }
    );

observer.observe(
    document.documentElement,
    {
        childList:true,
        subtree:true
    }
);

debug(
    'Runtime initialized',
    {
        baseUrl:Delluna.baseUrl,
        variants:Delluna.variants
    }
);

})();
