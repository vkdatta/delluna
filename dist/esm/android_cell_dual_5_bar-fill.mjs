export const name="android_cell_dual_5_bar-fill";
export const id="dl_f15968f97a98fdb36f04";
export const url=new URL("../icons/android_cell_dual_5_bar-fill.svg?v=efba8b32d18e80845e83024d95e774198a928d1687e19321ee2040301a6bb359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
