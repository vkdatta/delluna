export const name="motion_sensor_active-fill";
export const id="dl_e2dd2866e58e45649c4d";
export const url=new URL("../icons/motion_sensor_active-fill.svg?v=b732a78712d03adf9808091ec95f7a6d7df1c43f6fc4d4c9b4408dc805210322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
