export const name="android_cell_dual_4_bar_plus-fill";
export const id="dl_adc702e660fe4dbf9224";
export const url=new URL("../icons/android_cell_dual_4_bar_plus-fill.svg?v=7fb743e06d9d780fb28ad95d0a712ba82a672f8cc04d4685422112b922ebb568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
