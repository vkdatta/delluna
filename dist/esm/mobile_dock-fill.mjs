export const name="mobile_dock-fill";
export const id="dl_7ffe09c672e752d8b67f";
export const url=new URL("../icons/mobile_dock-fill.svg?v=6038cbd32372cb655e8fc85f5c9e1c402cd427ac47959b40d3e5a5903fcb384d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
