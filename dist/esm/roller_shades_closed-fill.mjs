export const name="roller_shades_closed-fill";
export const id="dl_afaa411fea61ee308722";
export const url=new URL("../icons/roller_shades_closed-fill.svg?v=fc93f69bd8c96b502d8494d359ab8664f40bfdeb4f84c745099fc163e148c3fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
