export const name="edit_attributes";
export const id="dl_d072b4636895d5cf39a0";
export const url=new URL("../icons/edit_attributes.svg?v=ebf312f7f059a1995b927131e2f920ebb952485b40af3e339f6ce7e51dfd148e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
