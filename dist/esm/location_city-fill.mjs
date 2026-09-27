export const name="location_city-fill";
export const id="dl_40c13d541b936672d84a";
export const url=new URL("../icons/location_city-fill.svg?v=fbf8fa86648fd515d059c2e56a2f1cbe0809d5af8b8dac496015fa4c14ba9a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
