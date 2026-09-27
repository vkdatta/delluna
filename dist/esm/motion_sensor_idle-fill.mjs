export const name="motion_sensor_idle-fill";
export const id="dl_44a10adaf583cd6979c6";
export const url=new URL("../icons/motion_sensor_idle-fill.svg?v=ca2412e9831bb52d119221852f64b0783f545206f83c3ea8375b3b4135070877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
