export const name="folder_copy-fill";
export const id="dl_a75b4431e21cd1549c8f";
export const url=new URL("../icons/folder_copy-fill.svg?v=bc32d080bf9fe3babe30ddce683c34035512f8432820814368d40cba4abb045c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
