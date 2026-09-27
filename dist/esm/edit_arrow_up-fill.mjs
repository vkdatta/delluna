export const name="edit_arrow_up-fill";
export const id="dl_247b491a4ad4d4f77c62";
export const url=new URL("../icons/edit_arrow_up-fill.svg?v=419ae30f65c3f32a01a7140ef4968971d36fbfe611fa8b8127ebe7ab60cc0b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
