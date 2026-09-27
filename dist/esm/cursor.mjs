export const name="cursor";
export const id="dl_0f1a34cc37da446cb6cb";
export const url=new URL("../icons/cursor.svg?v=a36411d6cddd3e47b99e5be7709a32a4347919c8ad43024e87a58038552a3c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
