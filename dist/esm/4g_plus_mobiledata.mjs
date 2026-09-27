export const name="4g_plus_mobiledata";
export const id="dl_f19ab9de30412cea9a40";
export const url=new URL("../icons/4g_plus_mobiledata.svg?v=f15280d5fc410dfc0fc3a7235b45dc41424e50096f8d5f97976e3249bbd56c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
