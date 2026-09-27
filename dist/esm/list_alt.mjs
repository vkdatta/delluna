export const name="list_alt";
export const id="dl_b0a7465a6cb3475608e7";
export const url=new URL("../icons/list_alt.svg?v=785e1206c0b7ba3dfd380d368dde8437b6aa7caefb9ab0b5295c5f66db2bc7ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
