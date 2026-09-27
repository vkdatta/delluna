export const name="battery_android_plus";
export const id="dl_b613e9ea593af29372e1";
export const url=new URL("../icons/battery_android_plus.svg?v=164e9cf150c4d57dc4c62944bda1f863f59f2671d5cc416a7e5d1fed70334494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
