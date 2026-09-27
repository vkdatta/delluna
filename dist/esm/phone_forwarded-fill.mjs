export const name="phone_forwarded-fill";
export const id="dl_0a948288855671cfff8a";
export const url=new URL("../icons/phone_forwarded-fill.svg?v=b1a07544388a3f52a5f4d722817b9e04d417484bede23b3beccce4d7a10caa97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
