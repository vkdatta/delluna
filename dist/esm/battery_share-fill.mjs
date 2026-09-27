export const name="battery_share-fill";
export const id="dl_eb91891b74f60085f27a";
export const url=new URL("../icons/battery_share-fill.svg?v=f4abeeec2af251caffbc9610620d5fd5fb7b9b836962f70f1a804c25f571236b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
