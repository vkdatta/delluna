export const name="edit_attributes";
export const id="dl_69d55fc3fecb02226c42";
export const url=new URL("../icons/edit_attributes.svg?v=e0cf779815715d0a326cbe8be0f1320cd7f7cc47c30169a008f9aba83bf3347f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
