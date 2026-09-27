export const name="user-minus-duotone";
export const id="dl_fb5582200c48c976d972";
export const url=new URL("../icons/user-minus-duotone.svg?v=6fe04139cea955b128fb1f2a5b9e9571727f17b3cab9c2c8a7b402e34d9b9e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
