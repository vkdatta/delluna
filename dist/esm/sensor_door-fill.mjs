export const name="sensor_door-fill";
export const id="dl_f8c91664622449e2803b";
export const url=new URL("../icons/sensor_door-fill.svg?v=bd3dcf8036980a16cc08bfda2913f5d911f87a64d4c597748c4e37ed790e5db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
