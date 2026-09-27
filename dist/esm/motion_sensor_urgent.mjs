export const name="motion_sensor_urgent";
export const id="dl_586db5799bf3d7f251f7";
export const url=new URL("../icons/motion_sensor_urgent.svg?v=ccabd5e115807346a95011151d40c050e3774d9b42418dd68a2fb20c1227eb26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
