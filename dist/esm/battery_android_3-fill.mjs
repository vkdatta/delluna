export const name="battery_android_3-fill";
export const id="dl_cf11e0513aa542f4bd45";
export const url=new URL("../icons/battery_android_3-fill.svg?v=1a307a34a45c73164e0a07d9209a78bdafae99446f282870d567cc4491a01d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
