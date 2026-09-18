export const name="stylus_fountain_pen-fill";
export const id="dl_42660cd34d2741ce90a4";
export const url=new URL("../icons/S/stylus_fountain_pen-fill.svg?v=da63a647ae7cf78f22ed643e68b773048c9fc08bf9b0f39fa551b1ba009ec6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
