export const name="folder_delete-fill";
export const id="dl_5bbca355bf8542749fb3";
export const url=new URL("../icons/folder_delete-fill.svg?v=013b9b38fef4bbcdc6766e32e801a27dce973814e0b0317580d46d55b60e7950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
