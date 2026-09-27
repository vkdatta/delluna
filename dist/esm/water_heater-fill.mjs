export const name="water_heater-fill";
export const id="dl_5ce030c540362898a420";
export const url=new URL("../icons/water_heater-fill.svg?v=d1d9b43e29d19f5caa501f131c288a7450346b13352e4559942e338e38758339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
