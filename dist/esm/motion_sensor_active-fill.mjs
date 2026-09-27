export const name="motion_sensor_active-fill";
export const id="dl_1a2aa62202a4f0ebe3fc";
export const url=new URL("../icons/motion_sensor_active-fill.svg?v=690a3f6b4999715f441e9fa198b7d2d2326755f52c78293c9491bc8cd07e2cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
