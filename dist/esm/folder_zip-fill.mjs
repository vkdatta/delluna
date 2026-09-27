export const name="folder_zip-fill";
export const id="dl_fa724b178f80c9888119";
export const url=new URL("../icons/folder_zip-fill.svg?v=d1ff89d6d0f416971167ea5f9f1856c74f4cfa2eb9eb680f45f177e975dd6679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
