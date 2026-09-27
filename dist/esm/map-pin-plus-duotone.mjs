export const name="map-pin-plus-duotone";
export const id="dl_da928b5c0bb440a18910";
export const url=new URL("../icons/map-pin-plus-duotone.svg?v=dbaddff47deba498069e0e69abe67666c56c59223e779eddd916375e718f34df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
