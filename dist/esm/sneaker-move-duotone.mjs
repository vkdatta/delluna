export const name="sneaker-move-duotone";
export const id="dl_1451efe174da92f7c281";
export const url=new URL("../icons/sneaker-move-duotone.svg?v=ac0fda6e4f12d9902b1a438d4efc6e83a5f8bc313939e5402231a38bfd2ebc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
