export const name="lucid_2-folder-tree";
export const id="dl_0480e45effcc41b49413";
export const url=new URL("../icons/lucid_2-folder-tree.svg?v=7022e1f135b3228ff7b7a16fab0c33d8c6bb33ed6fa00b1fc2f091b491036ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
