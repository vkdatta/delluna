export const name="mobile_sensor_lo";
export const id="dl_0f35f6538c704d708f4b";
export const url=new URL("../icons/mobile_sensor_lo.svg?v=c1ad23a0ce5564f154d73d44d103a89a8b6acad39582f0e944dd42d9a4db988f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
