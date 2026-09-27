export const name="grid_layout_side";
export const id="dl_5f34748e9fc4c64b895b";
export const url=new URL("../icons/grid_layout_side.svg?v=218ea34bb1a065a22a14e852651f66bf7decd20783ca1cf0b023048e61263943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
