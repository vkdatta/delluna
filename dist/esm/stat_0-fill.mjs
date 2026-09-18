export const name="stat_0-fill";
export const id="dl_784fd415a34040e3acbd";
export const url=new URL("../icons/stat_0-fill.svg?v=6a6d224f385928d4151dae8fad21e11b20363de78ef39777afcd80b6f1a454e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
