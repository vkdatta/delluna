export const name="android_cell_5_bar_off-fill";
export const id="dl_bb5102260ae9d1de1f76";
export const url=new URL("../icons/android_cell_5_bar_off-fill.svg?v=122c4fed00749b80c2db0578b185625d1b34e30485be99ee5f04895b220b8819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
