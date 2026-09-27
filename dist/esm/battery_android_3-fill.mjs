export const name="battery_android_3-fill";
export const id="dl_f1437a85e1d5cd6d0dc9";
export const url=new URL("../icons/battery_android_3-fill.svg?v=ef3f049a338b9bc8d7503981ad4ddfd39f5f8f6e7ca35e1d007061619ae595ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
