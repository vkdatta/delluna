export const name="device-tablet-camera-fill";
export const id="dl_ef293cdac00b4e6eaf37";
export const url=new URL("../icons/device-tablet-camera-fill.svg?v=65a403afb0614f86dcd5e1d325debc0eaa0fc0549cfa6fbd86b01d34f51fc607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
