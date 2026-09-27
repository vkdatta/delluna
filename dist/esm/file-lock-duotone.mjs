export const name="file-lock-duotone";
export const id="dl_7189ed5cea1c4d19a986";
export const url=new URL("../icons/file-lock-duotone.svg?v=e0ad12be0ceebf015c3142defb35cbf8774f991437623246845ff8cde82f7ce4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
