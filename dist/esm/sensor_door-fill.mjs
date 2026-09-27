export const name="sensor_door-fill";
export const id="dl_e8716aacf19fe0e45ce8";
export const url=new URL("../icons/sensor_door-fill.svg?v=e62ad6f51cae239eed91850f0e0850271102f35f1cf021b56cc5f38a50031468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
