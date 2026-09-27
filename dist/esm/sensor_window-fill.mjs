export const name="sensor_window-fill";
export const id="dl_8003f33cd7876e2771c2";
export const url=new URL("../icons/sensor_window-fill.svg?v=6102887106ca9dd2587711b3654a967f6375921cc4642249f93e359bc7bcf8c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
