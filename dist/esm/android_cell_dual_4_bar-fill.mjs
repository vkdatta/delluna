export const name="android_cell_dual_4_bar-fill";
export const id="dl_b343230d98ab4c99bb6d";
export const url=new URL("../icons/android_cell_dual_4_bar-fill.svg?v=0d7c74d8594cc7a75f79b8594f573f5114571d50f364819df0988aa4be0d8708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
