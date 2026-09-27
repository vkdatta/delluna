export const name="map-pin-line-light";
export const id="dl_f85e78dccfa649af8ea4";
export const url=new URL("../icons/map-pin-line-light.svg?v=1837d64c69c8738d0c9a5d1b8013912088a2cbb07794be098907ac7c97548159",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
