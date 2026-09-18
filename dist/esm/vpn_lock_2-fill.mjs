export const name="vpn_lock_2-fill";
export const id="dl_f7f220b59a2c42218950";
export const url=new URL("../icons/vpn_lock_2-fill.svg?v=68e60f19944220b71c0b6a8d4bbbb7a9c244acfbe0a418558c28d5d91ce31d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
