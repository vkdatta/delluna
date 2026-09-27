export const name="edit_off-fill";
export const id="dl_247ea6b95aec1f9f006c";
export const url=new URL("../icons/edit_off-fill.svg?v=114095e9dcd65c26f83808b457eb98db8f5f104c5009e415ca3d34890bf07bb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
