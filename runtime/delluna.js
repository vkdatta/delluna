(function(){
'use strict';

const DEFAULTS={
    base:'',
    variant:'og',
    color:'currentColor',
    fill:0,
    wght:400,
    grad:0,
    opsz:24,
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

    const script=document.currentScript;

    if(script&&script.src){

        const src=script.src.replace(
            /\/delluna(?:\.min)?\.js(?:\?.*)?$/i,
            ''
        );

        if(src&&src!==script.src){
            return normalizeBase(src);
        }
    }

    return '';
}

function requireBase(){

    const value=getBase();

    if(!value){
        throw new Error(
            'Delluna base URL is not configured. Set window.DELLUNA_SITE.base before loading delluna.js.'
        );
    }

    return value;
}

async function registry(){

    if(registryCache){
        return registryCache;
    }

    if(registryPending){
        return registryPending;
    }

    const base=requireBase();

    registryPending=
        fetch(
            base+'/registry.json',
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
        r.icons?.[name]||null;

    if(item?.aliasOf){
        item=
            r.icons?.[item.aliasOf]||null;
    }

    if(!item&&r.aliases?.[name]){
        item=
            r.icons?.[r.aliases[name]]||null;
    }

    return item||null;
}

function iconFile(item,name){

    if(item?.file){
        return item.file;
    }

    if(item?.path){
        return item.path;
    }

    return `icons/${name}.svg`;
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
        iconFile(item,name)
            .replace(/^\/+/,'')
            .replace(/^dist\//,'')
            .replace(/^src\/icons\//,'icons/');

    return base+'/'+
        file
            .split('/')
            .map(encodeURIComponent)
            .join('/');
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
        Number.isFinite(parts[2])
            ? parts[2]
            : 24;

    const h=
        Number.isFinite(parts[3])
            ? parts[3]
            : 24;

    attrs=
        attrs.replace(
            /\s*viewBox=["'][^"']*["']/i,
            ''
        ).trim();

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
        clamp(+c.wght||400,100,700);

    const g=
        clamp(+c.grad||0,-25,200);

    const f=
        clamp(+c.fill||0,0,1);

    const o=
        clamp(+c.opsz||24,16,48);

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
        c.plasmaColors;

    const stops=
        colors&&colors.length
            ? colors.map(
                (x,i)=>
                    `<stop offset="${
                        (
                            colors.length===1
                                ? 0
                                : i/(colors.length-1)
                        ).toFixed(2)
                    }" stop-color="${String(x).replace(/"/g,'')}"/>`
            ).join('')
            :
            `
            <stop
                offset="0"
                stop-color="var(--delluna-plasma-center,#ffffff)"
            />
            <stop
                offset="1"
                stop-color="var(--delluna-plasma-edge,#ffffff)"
            />
            `;

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

function resolve(name,extra){

    const ic=
        Object.assign(
            {},
            config.icons[name]||{},
            extra||{}
        );

    const v=
        ic.variant||
        config.global.variant||
        'og';

    const vc=
        config.variants[v]||{};

    const out={
        variant:
            families[v]
                ? v
                : 'og'
    };

    [
        'fill',
        'wght',
        'grad',
        'opsz',
        'color',
        'background',
        'plasmaColors'
    ].forEach(
        key=>{
            out[key]=
                ic[key]!==undefined
                    ? ic[key]
                    : vc[key]!==undefined
                        ? vc[key]
                        : config.global[key];
        }
    );

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
        name;

    if(cache.has(key)){
        return cache.get(key);
    }

    if(pending.has(key)){
        return pending.get(key);
    }

    const request=
        url(name)
            .then(
                iconUrl=>
                    fetch(iconUrl)
            )
            .then(
                response=>{

                    if(!response.ok){
                        throw new Error(
                            `Delluna SVG unavailable: HTTP ${response.status}`
                        );
                    }

                    return response.text();

                }
            )
            .then(
                text=>{

                    cache.set(
                        key,
                        text
                    );

                    pending.delete(
                        key
                    );

                    return text;

                }
            )
            .catch(
                error=>{

                    pending.delete(
                        key
                    );

                    throw error;

                }
            );

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

    if(
        c.color&&
        c.color!=='currentColor'
    ){

        const safeColor=
            String(c.color)
                .replace(/["<>]/g,'');

        svg=
            svg.replace(
                '<svg ',
                `<svg style="color:${safeColor}" `
            );
    }

    return svg;
}

async function paint(el){

    const name=
        el.getAttribute('name')||
        el.getAttribute('data-icon');

    if(!name){
        return;
    }

    try{

        const svg=
            await render(
                name,
                {
                    variant:
                        el.getAttribute('variant')||
                        undefined,

                    color:
                        el.getAttribute('color')||
                        undefined,

                    fill:
                        el.hasAttribute('fill')
                            ? el.getAttribute('fill')
                            : undefined,

                    wght:
                        el.hasAttribute('wght')
                            ? el.getAttribute('wght')
                            : undefined,

                    grad:
                        el.hasAttribute('grad')
                            ? el.getAttribute('grad')
                            : undefined,

                    opsz:
                        el.hasAttribute('opsz')
                            ? el.getAttribute('opsz')
                            : undefined
                }
            );

        el.innerHTML=svg;

        el.setAttribute(
            'data-icon-painted',
            name
        );

    }catch(error){

        console.error(
            'Delluna icon error:',
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

class DellunaIcon extends HTMLElement{

    static get observedAttributes(){
        return[
            'name',
            'variant',
            'color',
            'fill',
            'wght',
            'grad',
            'opsz'
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

    baseUrl:'',

    configure(options){

        options=
            options||{};

        if(
            options.baseUrl!==undefined
        ){

            this.baseUrl=
                normalizeBase(
                    options.baseUrl
                );

            config.global.base=
                this.baseUrl;

            registryCache=null;
            registryPending=null;
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

            registryCache=null;
            registryPending=null;
        }

        if(
            options.variant!==undefined
        ){
            config.global.variant=
                options.variant;
        }

        [
            'fill',
            'wght',
            'grad',
            'opsz',
            'color',
            'background',
            'plasmaColors'
        ].forEach(
            key=>{
                if(
                    options[key]!==undefined
                ){
                    config.global[key]=
                        options[key];
                }
            }
        );

        if(options.variants){

            Object.keys(
                options.variants
            ).forEach(
                v=>{
                    config.variants[v]=
                        Object.assign(
                            {},
                            config.variants[v],
                            options.variants[v]
                        );
                }
            );
        }

        if(options.icons){

            Object.keys(
                options.icons
            ).forEach(
                name=>{
                    config.icons[name]=
                        Object.assign(
                            {},
                            config.icons[name],
                            options.icons[name]
                        );
                }
            );
        }

        repaint();
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

        this.baseUrl='';

        registryCache=null;
        registryPending=null;

        cache.clear();
        pending.clear();

        repaint();
    },

    resolve,
    render,
    load,

    clearCache(){

        cache.clear();
        registryCache=null;
    },

    variants:Object.keys(
        families
    ),

    iconUrl:url,
    registry,
    resolveItem
};

window.Delluna=Delluna;
window.DexIcons=Delluna;

window.dexIcon=
    function(name,cls){

        const safeName=
            String(name)
                .replace(/"/g,'&quot;');

        const safeClass=
            cls
                ? ` class="${String(cls).replace(/"/g,'')}"`
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

        return true;
    }

    return false;
}

autoConfigure();

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
                                .forEach(paint);
                        }
                    }
                );
            }
        );
    }
).observe(
    document.documentElement,
    {
        childList:true,
        subtree:true
    }
);

})();

//v3

