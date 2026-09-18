export const name="mobile_dock-fill";
export const id="dl_f16c8125fb5d4bea99e3";
export const url=new URL("../icons/M/mobile_dock-fill.svg?v=6038cbd32372cb655e8fc85f5c9e1c402cd427ac47959b40d3e5a5903fcb384d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
