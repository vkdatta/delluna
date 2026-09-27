export const name="mobile_sensor_hi-fill";
export const id="dl_2ce5e538747c28793d40";
export const url=new URL("../icons/mobile_sensor_hi-fill.svg?v=4f2845012a5013389edb1bba29b3c2f6390f40460ab91f90c788929f50686541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
