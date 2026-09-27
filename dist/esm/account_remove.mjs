export const name="account_remove";
export const id="dl_e7475336a7ec07402e77";
export const url=new URL("../icons/account_remove.svg?v=2fa587c91e0e181ea1bc6b67f3764d945ae751aca4a3d8ba4a29f1f4179a7d94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
