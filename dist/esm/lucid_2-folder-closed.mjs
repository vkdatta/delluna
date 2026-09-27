export const name="lucid_2-folder-closed";
export const id="dl_869289af8ff04af490c6";
export const url=new URL("../icons/lucid_2-folder-closed.svg?v=81f7c5c446500b5bdd913027f72a0ede5e144dd1414fb9b9ebbc239ecbde4453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
