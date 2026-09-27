export const name="verified_user";
export const id="dl_004f80675f0f06f7d924";
export const url=new URL("../icons/verified_user.svg?v=30fa75ced868811ce7e84e3a060bd96c467b979212fa318ea9f8f6573be7106c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
