export const name="battery_android_bolt-fill";
export const id="dl_3cd7212eeb6c2e93751a";
export const url=new URL("../icons/battery_android_bolt-fill.svg?v=ac3fae50ccd9c8a00af68b57ba1b85c0d20ad0c2817e36aeada1bf99dff42457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
