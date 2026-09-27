export const name="vpn_lock_2-fill";
export const id="dl_a81d339eddf9ba408227";
export const url=new URL("../icons/vpn_lock_2-fill.svg?v=4035549e68bba95375bf7d8ff9eac80385ae5d398e8bcd94f5646faca4f77507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
