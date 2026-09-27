export const name="lucid_2-folder-tree";
export const id="dl_0480e45effcc41b49413";
export const url=new URL("../icons/lucid_2-folder-tree.svg?v=16815e1ec142830631edcc24a42fe6c4458449448c2fab64978d99c525a6b967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
