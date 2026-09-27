export const name="merge_type";
export const id="dl_3d350e85004bc3c5afdf";
export const url=new URL("../icons/merge_type.svg?v=388b8c09722868c41d0e36c82a571e728a9328d26b9007e41786c03080026939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
