export const name="android_cell_4_bar-fill";
export const id="dl_3d7b1b8b7bbcc7915c9a";
export const url=new URL("../icons/android_cell_4_bar-fill.svg?v=00d6b8bd2495ad3185c4572bcb56c18095033a222047c1db1c0d9a2787c52f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
