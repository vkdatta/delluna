export const name="vpn_lock_2-fill";
export const id="dl_b7b9399d94e8b721a285";
export const url=new URL("../icons/vpn_lock_2-fill.svg?v=9233c944ba54782baebb1844e07c73233a60859a2256426ed6c6ac4984136874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
