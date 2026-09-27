export const name="motion_sensor_alert-fill";
export const id="dl_292eb7cae2ee59340b88";
export const url=new URL("../icons/motion_sensor_alert-fill.svg?v=f826e0470bbc326f8feec8840de47ff533551ea9fe0cc7f5aed1a2a44fd70de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
