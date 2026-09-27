export const name="lucid_2-folder-closed";
export const id="dl_869289af8ff04af490c6";
export const url=new URL("../icons/lucid_2-folder-closed.svg?v=4b217a5b0a002933b366117c6cc94156c7c0a2504132c283a6b98cdaf1c8177e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
