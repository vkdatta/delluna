export const name="trip-fill";
export const id="dl_b4890c41bb524789b360";
export const url=new URL("../icons/trip-fill.svg?v=3b7951e608f430a70b562b7e656dc8637e6d513229dc0dcb89e4c89780605e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
