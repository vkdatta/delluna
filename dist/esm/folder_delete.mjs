export const name="folder_delete";
export const id="dl_a025939da8e5bb30ba3a";
export const url=new URL("../icons/folder_delete.svg?v=0f58b78b0fecac2d9f5720b5be7666f63d796a7d6bebdb039513fcfede55de1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
