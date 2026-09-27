export const name="map-pin-bold";
export const id="dl_079014f24c9f4a77924b";
export const url=new URL("../icons/map-pin-bold.svg?v=14da150cb809d25dd6176a009e43185559ed4a11616a79277d2e5a1db2516f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
