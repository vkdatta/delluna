export const name="edit_location_alt";
export const id="dl_03097d392d4740e3ac72";
export const url=new URL("../icons/edit_location_alt.svg?v=872bbdd3de429b566a0b767043f6214e726bd3af68204bc96a6e7e83a695c76f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
