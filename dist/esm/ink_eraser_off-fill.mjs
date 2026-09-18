export const name="ink_eraser_off-fill";
export const id="dl_4e3df8b957e3464dafa6";
export const url=new URL("../icons/ink_eraser_off-fill.svg?v=18f510576e951369ba95dce8d163d7bd5839472a1a8b3d33e95deae090973997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
