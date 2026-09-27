export const name="user-duotone";
export const id="dl_3fc9fb39051f61407084";
export const url=new URL("../icons/user-duotone.svg?v=0a0c966e9fbe7630a75a9a41bcd48cd61052edf5cd2dbd7974b03140254a291a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
