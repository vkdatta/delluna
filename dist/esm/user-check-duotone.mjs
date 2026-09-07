export const name="user-check-duotone";
export const id="dl_c04ca7eb7d48422b9aad";
export const url=new URL("../icons/U/user-check-duotone.svg?v=4dd7c39395a5d480e8ddc948d9ed39be1e109d0e0b97c70f58cc7c140b788711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
