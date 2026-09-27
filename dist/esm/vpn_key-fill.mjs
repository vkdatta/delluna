export const name="vpn_key-fill";
export const id="dl_d9e700f8b4b2cbb8f873";
export const url=new URL("../icons/vpn_key-fill.svg?v=30cab7043a4997a41193e6f45f5f844021b66d5f355d7d0ca3bc68635dbe3bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
