export const name="mobile_sensor_hi-fill";
export const id="dl_c0679c4e493a9e8067ae";
export const url=new URL("../icons/mobile_sensor_hi-fill.svg?v=26deafa32cf9e7dd77da1ac27ccf6e41233290db1efeee809ed4122582d4a86d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
