export const name="android_cell_5_bar_off-fill";
export const id="dl_3832950f2fbcc0fa2efa";
export const url=new URL("../icons/android_cell_5_bar_off-fill.svg?v=d8fa600e7d9039dccf9d3ad8f3f0335b0f8d8a22729170e9e4f6a21b35dc0a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
