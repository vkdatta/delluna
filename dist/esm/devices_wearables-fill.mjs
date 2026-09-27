export const name="devices_wearables-fill";
export const id="dl_ba00b15cdcf6612b7181";
export const url=new URL("../icons/devices_wearables-fill.svg?v=10ee41478b0987119ad22f7396e14ed2bac5345245e7dce8452b554e2e6257d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
