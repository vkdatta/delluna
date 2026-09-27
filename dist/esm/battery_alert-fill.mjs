export const name="battery_alert-fill";
export const id="dl_9c01f4f1911f4f230026";
export const url=new URL("../icons/battery_alert-fill.svg?v=da5a60830b19479cf45f47bc14c033923f53f248bb91dce85c3ec7eedd3d97bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
