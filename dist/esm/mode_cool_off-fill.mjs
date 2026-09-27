export const name="mode_cool_off-fill";
export const id="dl_e80d42414ee84fec377f";
export const url=new URL("../icons/mode_cool_off-fill.svg?v=3d190514963f1de2ed39957493acb3f53af509cbb3b2936d41f5788708168499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
