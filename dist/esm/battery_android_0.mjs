export const name="battery_android_0";
export const id="dl_1f94d65d51ef512f5b18";
export const url=new URL("../icons/battery_android_0.svg?v=036f5f07e9a56a3827f2d6f7de543c53320156cc5fdf32d9d6ad620c8d50f106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
