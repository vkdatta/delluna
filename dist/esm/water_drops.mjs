export const name="water_drops";
export const id="dl_5496cf7051351d1925a4";
export const url=new URL("../icons/water_drops.svg?v=22d73fadddd7fbb6135cfc73a808b3c8aa841197977b081bc3fbf3309c34a95a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
