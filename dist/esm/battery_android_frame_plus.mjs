export const name="battery_android_frame_plus";
export const id="dl_016795dc736bcbd7cbdf";
export const url=new URL("../icons/battery_android_frame_plus.svg?v=82565e5a05aa0ba4b04340564051b34adfad49475691de1305dadb8453136b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
