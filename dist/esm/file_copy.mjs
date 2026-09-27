export const name="file_copy";
export const id="dl_6a6a7c16be2d49c15d64";
export const url=new URL("../icons/file_copy.svg?v=15eb1437fe20344bac7256bce0742221f4117dbe1b5d54494bcb502fe62a57df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
