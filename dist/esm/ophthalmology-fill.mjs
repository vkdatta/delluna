export const name="ophthalmology-fill";
export const id="dl_4dd3f280941031c1cb59";
export const url=new URL("../icons/ophthalmology-fill.svg?v=d179bf4a80aea3ed460ce6a363686e1720895b7d044313534f42791564b00f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
