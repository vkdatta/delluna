export const name="battery_android_frame_full";
export const id="dl_c39758be8fb64225929f";
export const url=new URL("../icons/battery_android_frame_full.svg?v=380b3b7786a0ebbe6b234681a7e955a324f4c21ba8ea045182b100722ad77ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
