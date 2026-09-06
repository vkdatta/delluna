export const name="lucid_2-list-tree";
export const id="dl_41aba6495a1946099b47";
export const url=new URL("../icons/lucid_2-list-tree.svg?v=833b82c1c0ad9cbc9d8f78db6b459ac556cc8ccc02d128e0df09211ca98e1a59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
