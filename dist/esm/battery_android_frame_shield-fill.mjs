export const name="battery_android_frame_shield-fill";
export const id="dl_5ac7633c2758ae582fd7";
export const url=new URL("../icons/battery_android_frame_shield-fill.svg?v=72a3f6d13e8a83cd78b770e41bf8101a94a1e7e2ffb9cd28dfe3f6a73f1865cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
