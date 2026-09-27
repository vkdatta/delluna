export const name="home_health-fill";
export const id="dl_1f95e2eeebb6379c6176";
export const url=new URL("../icons/home_health-fill.svg?v=731871433a84a13f5097567c19f719d1beedabee4791311b558ff26cf1d5df1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
