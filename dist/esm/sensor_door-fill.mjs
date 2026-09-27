export const name="sensor_door-fill";
export const id="dl_07d9c786db3821c367eb";
export const url=new URL("../icons/sensor_door-fill.svg?v=48e54efd9c005b621d06cb542a539de09fadb1144443746afc3927c56f0bcc1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
