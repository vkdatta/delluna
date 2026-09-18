export const name="perm_phone_msg";
export const id="dl_e61d499afff04e1b9ae7";
export const url=new URL("../icons/perm_phone_msg.svg?v=45171ec030543cdbbee5783887303fcb9fa69b6c08be37c6492a23cf22107454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
