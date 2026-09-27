export const name="sync_lock";
export const id="dl_106a8c527176a319e9b0";
export const url=new URL("../icons/sync_lock.svg?v=307c6c998b923d111bbe42c3a3d0635edc7a59a8c8061bf38db805f3933da3fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
