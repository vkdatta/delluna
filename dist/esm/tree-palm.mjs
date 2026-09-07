export const name="tree-palm";
export const id="dl_5232e0be5c7b4289ae21";
export const url=new URL("../icons/tree-palm.svg?v=451aadeadcc3cd682468742837ecafc7a9079c3d5d11067479fa7b8acfde6489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
