export const name="edit_off";
export const id="dl_1cae51045031f86defb2";
export const url=new URL("../icons/edit_off.svg?v=ee75a366846d23c85c433e2130708403723ad9ab4f148fbd2d86153ea079d477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
