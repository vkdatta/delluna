figma.showUI(__html__, {width: 420, height: 640});
const DEFAULT_BASE='https://cdn.jsdelivr.net/gh/vkdatta/delluna@main/dist';
function safeBase(v){return String(v||DEFAULT_BASE).replace(/\/$/,'')}
async function fetchText(url){const r=await fetch(url);if(!r.ok)throw Error(`HTTP ${r.status}`);return r.text()}
function variantSvg(raw,variant){
  const m=String(raw).trim().match(/^<svg\b([^>]*)>([\s\S]*)<\/svg>\s*$/i); if(!m)return raw;
  const vb=(m[1].match(/\bviewBox=["']([^"']+)["']/i)||[])[1]||'0 0 24 24';
  const inner=m[2]; const v=String(variant||'og').toLowerCase();
  if(v==='og')return raw;
  const box=`<svg viewBox="${vb}">`;
  if(v==='hud')return box+`<g>${inner}</g><path d="M2 7V2h5M17 2h5v5M22 17v5h-5M7 22H2v-5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`+'</svg>';
  if(v==='orbit')return box+`<ellipse cx="12" cy="12" rx="11" ry="5" fill="none" stroke="currentColor" stroke-width=".7" opacity=".4" transform="rotate(-18 12 12)"/><g transform="translate(2.88 2.88) scale(.76)">${inner}</g><circle cx="22.3" cy="9.1" r="1.1" fill="currentColor"/>`+'</svg>';
  if(v==='circuit')return box+`<g>${inner}</g><g fill="currentColor" opacity=".55"><circle cx="2.4" cy="2.4" r="1.1"/><circle cx="21.6" cy="21.6" r="1.1"/></g>`+'</svg>';
  if(v==='plasma')return box+`<defs><radialGradient id="delluna-plasma" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="currentColor"/><stop offset="1" stop-color="#7c818a"/></radialGradient></defs><g style="color:url(#delluna-plasma)">${inner}</g><circle cx="19.2" cy="4.8" r="2.1" fill="url(#delluna-plasma)" opacity=".24"/><circle cx="19.2" cy="4.8" r=".9" fill="url(#delluna-plasma)"/>`+'</svg>';
  return raw;
}

function styleSvg(raw,style,secondary='#7c818a'){
  const m=String(raw).trim().match(/^<svg\b([^>]*)>([\s\S]*)<\/svg>\s*$/i); if(!m)return raw;
  const vb=(m[1].match(/\bviewBox=["']([^"']+)["']/i)||[])[1]||'0 0 24 24';
  const clean=m[2].replace(/\s*fill=["'](?:none|#[0-9a-f]{3,8}|rgba?\([^)]*\)|[a-z]+)["']/gi,'').replace(/\s*stroke=["'](?:none|#[0-9a-f]{3,8}|rgba?\([^)]*\)|[a-z]+)["']/gi,'');
  const wrap=b=>`<svg viewBox="${vb}">${b}</svg>`;
  if(style==='single')return wrap(clean); if(style==='outline')return wrap(m[2]); if(style==='fill')return wrap(clean.replace(/<([a-z][\w:-]*)([^>]*)>/gi,(x,t,a)=>{const self=/\/\s*$/.test(a);const attrs=a.replace(/\/\s*$/,'');return `<${t}${attrs} fill="currentColor" stroke="none"${self?'/':''}>`;})); if(style==='solid')return wrap(clean.replace(/stroke-width=["']([\d.]+)["']/gi,(_,v)=>`stroke-width="${(Number(v)*1.65).toFixed(2)}"`).replace(/<([a-z][\w:-]*)([^>]*)>/gi,(x,t,a)=>{const self=/\/\s*$/.test(a);const attrs=a.replace(/\/\s*$/,'');return `<${t}${attrs} fill="currentColor"${self?'/':''}>`;})); if(style==='duotone')return wrap(`<g opacity=".18">${clean}</g><g>${clean}</g>`); if(style==='duocolor')return wrap(`<g opacity=".45" style="color:${secondary}">${clean}</g><g>${clean}</g>`); return wrap(m[2]);
}
figma.ui.onmessage=async msg=>{
  try{
    if(msg.type==='close'){figma.closePlugin();return}
    if(msg.type==='import'){
      const base=safeBase(msg.base), p=String(msg.path||'').replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/');
      const url=`${base}/${msg.style&&msg.style!=='single'?`styles/${encodeURIComponent(msg.style)}/`:''}icons/${p}${msg.hash?`?v=${encodeURIComponent(msg.hash)}`:''}`;
      let svg=await fetchText(url);
      svg=variantSvg(svg,msg.variant||'og');
      if(msg.style==='single')svg=styleSvg(svg,'single');
      const node=figma.createNodeFromSvg(svg); node.name=msg.name||'Delluna Icon'; node.setPluginData('delluna.icon',msg.name||''); node.setPluginData('delluna.style',msg.style||'single'); node.setPluginData('delluna.variant',msg.variant||'og'); figma.currentPage.appendChild(node); node.x=figma.viewport.center.x-node.width/2; node.y=figma.viewport.center.y-node.height/2; figma.currentPage.selection=[node]; figma.viewport.scrollAndZoomIntoView([node]); figma.notify(`Added ${msg.name}`); return;
    }
  }catch(e){figma.notify(e.message||'Delluna import failed',{error:true})}
};
