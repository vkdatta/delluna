export const name="android_cell_4_bar_off-fill";
export const id="dl_032935d78f3516cf9fb3";
export const url=new URL("../icons/android_cell_4_bar_off-fill.svg?v=17a0a73cd9bce3d9349a85caf639f5450918504248c3e4e5d4780abff93e74dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
