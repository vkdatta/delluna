export const name="android_cell_dual_5_bar-fill";
export const id="dl_90fab80f91ae8272ceb8";
export const url=new URL("../icons/android_cell_dual_5_bar-fill.svg?v=31bc77db694cabf1064e323a4ea1490646c9457cd0eeedc7aad7b4c519fe44b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
