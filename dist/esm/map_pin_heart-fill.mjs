export const name="map_pin_heart-fill";
export const id="dl_1d72bd54a95b42f89b5d";
export const url=new URL("../icons/M/map_pin_heart-fill.svg?v=65cbb8609fd99bcc8ba616cefcd2204d271c1a1c202352bea4c5bcd212d85989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
