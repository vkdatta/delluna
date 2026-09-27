export const name="tree-palm";
export const id="dl_5232e0be5c7b4289ae21";
export const url=new URL("../icons/tree-palm.svg?v=2788781c1323e151d4e985e8a7d68c3bb1286209ae353e48f3434a096eeb6a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
