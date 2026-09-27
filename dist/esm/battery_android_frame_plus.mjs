export const name="battery_android_frame_plus";
export const id="dl_243ab562f589ccd1b984";
export const url=new URL("../icons/battery_android_frame_plus.svg?v=5f244a71c425abd0f2bbada01c65cce5f3c901eca551052d0908fb12b8301c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
