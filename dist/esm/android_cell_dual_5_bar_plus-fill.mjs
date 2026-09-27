export const name="android_cell_dual_5_bar_plus-fill";
export const id="dl_eb4de5ee9e8aac2c9267";
export const url=new URL("../icons/android_cell_dual_5_bar_plus-fill.svg?v=37171190b185ac1b10f6a572e667df71e82d50f7f40826a7ad8812ba01fd7de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
