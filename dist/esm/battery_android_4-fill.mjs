export const name="battery_android_4-fill";
export const id="dl_b3d25291446b4aa45de8";
export const url=new URL("../icons/battery_android_4-fill.svg?v=6e2ad45019e311eb5efff69c9b1beaa790243e4758ae257516b42c9ac1a7c848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
