export const name="delivery_truck_speed-fill";
export const id="dl_0b13cba0a6649a3bf262";
export const url=new URL("../icons/delivery_truck_speed-fill.svg?v=1c8068ce553e1c58a8347cd0058d2ffc07d13e260f17a2437cce70483b892929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
