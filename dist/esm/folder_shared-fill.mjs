export const name="folder_shared-fill";
export const id="dl_b78b3760e1844af8a968";
export const url=new URL("../icons/folder_shared-fill.svg?v=1fde14c519aa445bbdec82b9d5794b1f6d81522e35342e4025514835aedab088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
