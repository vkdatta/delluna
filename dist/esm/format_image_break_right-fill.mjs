export const name="format_image_break_right-fill";
export const id="dl_527ad13bc93f0da632e0";
export const url=new URL("../icons/format_image_break_right-fill.svg?v=eabf087cca49d6de666fbcff8a0e993091a655becd5d3e60e5d7b98bc739cdef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
