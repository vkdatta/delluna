export const name="nest_remote_comfort_sensor";
export const id="dl_d0ff749758ad48b08012";
export const url=new URL("../icons/N/nest_remote_comfort_sensor.svg?v=88b9dcaeea3e7533811c74280e3a6f75ca4db46e3ca7eec3cc137f527c7f813d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
