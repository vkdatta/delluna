export const name="flash_on-fill";
export const id="dl_640a986ecc8ce7299704";
export const url=new URL("../icons/flash_on-fill.svg?v=c69ad2aa9faeac053e3bd41cbcc0fed4aad4ee1ec3d83f677ba89ef244460912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
