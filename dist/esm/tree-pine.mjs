export const name="tree-pine";
export const id="dl_f8909ef3b4f240fabf58";
export const url=new URL("../icons/tree-pine.svg?v=6424ca8a071878ffc9bbe79518bdc94f21222271b2e60be6b0689bcce05a8448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
