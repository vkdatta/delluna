export const name="ghost-duotone";
export const id="dl_f8d9b355a7e84711a16d";
export const url=new URL("../icons/ghost-duotone.svg?v=1f37d27a21e59df0c2323ad802de5d7d5a06c309b1873346268515a41d9a563b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
