export const name="keyboard_double_arrow_right-fill";
export const id="dl_c9ab965930f788deaaba";
export const url=new URL("../icons/keyboard_double_arrow_right-fill.svg?v=079e2eb4ab21a2e499acb4346eba8451f7734ed8e87ec6f576b1c7ba72f72db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
