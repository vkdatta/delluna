export const name="water_orp-fill";
export const id="dl_db672666bed08356ce87";
export const url=new URL("../icons/water_orp-fill.svg?v=2a33cf69a66cc195d6896f321183c4e936075eb3fe66e7f6cb0cb66e3c7248cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
