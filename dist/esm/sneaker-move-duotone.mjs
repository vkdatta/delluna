export const name="sneaker-move-duotone";
export const id="dl_210b0d0a84e840ee9ec4";
export const url=new URL("../icons/S/sneaker-move-duotone.svg?v=ac0fda6e4f12d9902b1a438d4efc6e83a5f8bc313939e5402231a38bfd2ebc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
