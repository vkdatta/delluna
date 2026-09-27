export const name="keyboard_double_arrow_up";
export const id="dl_01158aff499ed200761f";
export const url=new URL("../icons/keyboard_double_arrow_up.svg?v=5061fa0da93ecbe63349dc89df5f2db5de63bd2d163030e285b6a9fe7156611a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
