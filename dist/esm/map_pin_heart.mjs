export const name="map_pin_heart";
export const id="dl_65f510d4663692bdb0d8";
export const url=new URL("../icons/map_pin_heart.svg?v=9ba4d97a4d40a340081f2366977f0e58b93ad71d73a737a87c2b53a76eef639d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
