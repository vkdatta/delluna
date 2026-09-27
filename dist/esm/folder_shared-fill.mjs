export const name="folder_shared-fill";
export const id="dl_09476e872bfec4dffea7";
export const url=new URL("../icons/folder_shared-fill.svg?v=dab2adf28278cd2ed9d4fc866d0fdd1df60d05a0e1dd2287e88de005d9352a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
