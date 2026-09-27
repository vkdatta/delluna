export const name="sensor_door-fill";
export const id="dl_7515c396e206c8dc54a6";
export const url=new URL("../icons/sensor_door-fill.svg?v=5e456fd228d305b5f9a133824795a48ef4eee50ec7eb3fc8ed1f772360d91d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
