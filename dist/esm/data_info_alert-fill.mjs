export const name="data_info_alert-fill";
export const id="dl_8def4b43244a41d598a3";
export const url=new URL("../icons/data_info_alert-fill.svg?v=bec53559a10758883026b575fef026b36431ba93c24fc88276d652d518570411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
