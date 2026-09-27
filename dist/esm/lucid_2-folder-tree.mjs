export const name="lucid_2-folder-tree";
export const id="dl_0480e45effcc41b49413";
export const url=new URL("../icons/lucid_2-folder-tree.svg?v=1d152b7ce3bdf52f640c48f081e55873517f4c5a6108de92093d8cacbb44ca11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
