export const name="android_cell_dual_5_bar_plus-fill";
export const id="dl_b0b182167733a2bea713";
export const url=new URL("../icons/android_cell_dual_5_bar_plus-fill.svg?v=d8dbabd9d970f9aa0f2e3917bf5f2e29df5d10363e4f2920bb20b0165cc5d5c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
