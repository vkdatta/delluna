export const name="lucid_2-folder-key";
export const id="dl_6f11559c32ec42769e36";
export const url=new URL("../icons/lucid_2-folder-key.svg?v=f55ae95890a70ce849b7e0cecf0fe2be927cb99151cbf6f636d70a6317609961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
