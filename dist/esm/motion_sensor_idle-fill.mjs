export const name="motion_sensor_idle-fill";
export const id="dl_c8a0b82d70fdee622510";
export const url=new URL("../icons/motion_sensor_idle-fill.svg?v=6885ceeace7cd44988393c4c6bc905839cac48af17614c8e36622b7278ee0369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
