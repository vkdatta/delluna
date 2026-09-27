export const name="cloud_lock";
export const id="dl_f6c2eea51c5d30cdeff0";
export const url=new URL("../icons/cloud_lock.svg?v=24846ff2770120b35d2152b502cfbdde57d070dde554a596c8a7c0217bb0725b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
