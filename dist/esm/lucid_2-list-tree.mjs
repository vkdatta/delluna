export const name="lucid_2-list-tree";
export const id="dl_41aba6495a1946099b47";
export const url=new URL("../icons/lucid_2-list-tree.svg?v=8663875b539ecb438a2484f0e6eb796069c17585b51b0b280ec6d4b36ca0b194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
