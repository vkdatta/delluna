export const name="water_voc-fill";
export const id="dl_e16afd354cb06e49d768";
export const url=new URL("../icons/water_voc-fill.svg?v=8bf4eeb5c2797d007b56c3ec6ac0d2c3f66bb2b9b8c5aaa0fe8231150b56003f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
