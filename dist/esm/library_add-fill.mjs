export const name="library_add-fill";
export const id="dl_599737139d9fd9b947bf";
export const url=new URL("../icons/library_add-fill.svg?v=5ac7dfd47139a4141bdfb221525294b47a83b34a7262c09bed149dd5fe48fe4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
