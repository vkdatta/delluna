export const name="battery_android_plus-fill";
export const id="dl_114615e2a1c725c4fd14";
export const url=new URL("../icons/battery_android_plus-fill.svg?v=fa355f4ef663451ddc8c56012353b7f33fae5eaa8984dbb0e62d9d50b332630c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
