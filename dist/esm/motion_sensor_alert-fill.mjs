export const name="motion_sensor_alert-fill";
export const id="dl_c1dc41c2e08a20c72915";
export const url=new URL("../icons/motion_sensor_alert-fill.svg?v=f8c3e72c3a09e382cfd24e063e30a0fa464793d2f2981c39b9b52e453244a6fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
