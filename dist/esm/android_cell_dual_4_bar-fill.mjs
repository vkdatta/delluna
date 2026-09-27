export const name="android_cell_dual_4_bar-fill";
export const id="dl_9e689ed43ff6ee5ef70f";
export const url=new URL("../icons/android_cell_dual_4_bar-fill.svg?v=75119586cbce67828bd2c7a3e03694e7dae7cc8318f2c302ad7dcdf4608e02d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
