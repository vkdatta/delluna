export const name="location_off-fill";
export const id="dl_b9e4c2dd7e942eeaf71a";
export const url=new URL("../icons/location_off-fill.svg?v=512863346c8f12f540163fd4d1ebf08aa741f0c21ba271bbe3613f1cde29c150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
