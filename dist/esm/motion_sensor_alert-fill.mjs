export const name="motion_sensor_alert-fill";
export const id="dl_5cf2a251c28f423b8e92";
export const url=new URL("../icons/motion_sensor_alert-fill.svg?v=86410a09ee36330afcd586601073b860e9b76ecea918c6ac98070e7dd328fe0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
