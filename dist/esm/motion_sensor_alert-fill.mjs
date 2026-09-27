export const name="motion_sensor_alert-fill";
export const id="dl_7a6d09e2b2aba389ec8c";
export const url=new URL("../icons/motion_sensor_alert-fill.svg?v=39d9faa9f12980608d41d189638026ce1762b4edfd3e30431d604ffae13674a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
