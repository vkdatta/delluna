export const name="arrows_more_up-fill";
export const id="dl_f514a7b867da9e134cbf";
export const url=new URL("../icons/arrows_more_up-fill.svg?v=335567be5e609aa25064876a1d50582a0f5275d0959de1f2d9bce88a63a6b3cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
