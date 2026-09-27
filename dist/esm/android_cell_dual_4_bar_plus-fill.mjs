export const name="android_cell_dual_4_bar_plus-fill";
export const id="dl_14bb6c13cc8b5b80ff91";
export const url=new URL("../icons/android_cell_dual_4_bar_plus-fill.svg?v=5c8f01bb9868b2a42a8be840a6a558938a25b12cde74ccb2bd124b1f5ed77fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
