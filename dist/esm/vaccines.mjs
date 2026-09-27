export const name="vaccines";
export const id="dl_80ce863fe5aee4a41e36";
export const url=new URL("../icons/vaccines.svg?v=2c4de98d98aa4d963332e1b03ff143037b6421b7aec6da9f778f325efd984390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
