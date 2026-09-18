export const name="donut_large-fill";
export const id="dl_d54e956a0aa34c1d82d3";
export const url=new URL("../icons/donut_large-fill.svg?v=7648b151a3d83a2d421bd374c1d00b1a79c01d49a2bb2bfc096436fc5dec5de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
