export const name="file_copy";
export const id="dl_101e205d0616418e9d36";
export const url=new URL("../icons/F/file_copy.svg?v=15eb1437fe20344bac7256bce0742221f4117dbe1b5d54494bcb502fe62a57df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
