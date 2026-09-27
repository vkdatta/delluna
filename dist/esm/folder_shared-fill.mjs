export const name="folder_shared-fill";
export const id="dl_b99f8ae244eb82827975";
export const url=new URL("../icons/folder_shared-fill.svg?v=3851309f31170b932dfd67a8d0a794dcadb831120a5448eaf0bb338a28b620cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
