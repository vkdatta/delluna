export const name="network_wifi";
export const id="dl_dfce3df5adfd263f887f";
export const url=new URL("../icons/network_wifi.svg?v=b0df0fc1251c0563d4f1b92a0643356258bac35f91ddefbea171ca107fe8f753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
