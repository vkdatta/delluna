export const name="map_pin_heart-fill";
export const id="dl_b286686e772693e4f7f9";
export const url=new URL("../icons/map_pin_heart-fill.svg?v=65cbb8609fd99bcc8ba616cefcd2204d271c1a1c202352bea4c5bcd212d85989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
