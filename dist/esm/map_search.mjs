export const name="map_search";
export const id="dl_5dc1f2421656807e2cfe";
export const url=new URL("../icons/map_search.svg?v=5c50794720f7bd46aa6430c1a1c2c9c91f85d0024265ee974fef65e775b8d270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
