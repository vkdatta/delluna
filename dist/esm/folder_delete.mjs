export const name="folder_delete";
export const id="dl_9d62a02c8e1465368b63";
export const url=new URL("../icons/folder_delete.svg?v=8c7614532f1c5ca5a80c56a35cabc7b9843f3511b03dae489b6936d26a5056b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
