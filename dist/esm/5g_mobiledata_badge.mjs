export const name="5g_mobiledata_badge";
export const id="dl_bc0f5d52cea3c3e0857a";
export const url=new URL("../icons/5g_mobiledata_badge.svg?v=46ac0fe0f5ac3c1325fbc7120379f5d4958a19c0fc96f845ee8b2bc8f69df0f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
