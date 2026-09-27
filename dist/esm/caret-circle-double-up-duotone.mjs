export const name="caret-circle-double-up-duotone";
export const id="dl_d9e86fde3aa54efca2d4";
export const url=new URL("../icons/caret-circle-double-up-duotone.svg?v=b75e810ba72571f9c2fc878a75480424840ccca17558135c8b053bb09d7ac595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
