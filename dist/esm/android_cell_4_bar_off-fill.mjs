export const name="android_cell_4_bar_off-fill";
export const id="dl_786b2f77db010bc2d90b";
export const url=new URL("../icons/android_cell_4_bar_off-fill.svg?v=3c8dfcba3ec334455e9784489711fb0f19b86d60c4389feb8d52134b023b192a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
