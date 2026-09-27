export const name="nest_remote_comfort_sensor-fill";
export const id="dl_d573e0ecb604cd99335c";
export const url=new URL("../icons/nest_remote_comfort_sensor-fill.svg?v=5938d15d3d499dd782df7ea5717152ef90c13714a4c413a7844742895415f517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
