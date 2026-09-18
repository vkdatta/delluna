export const name="battery_full_alt-fill";
export const id="dl_a75b63e3daa440b1b675";
export const url=new URL("../icons/battery_full_alt-fill.svg?v=6370b2d74d8596319f718a1c46d6900dc5ba361b569e81e25b521dd7e8e962cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
