export const name="shift_lock_off-fill";
export const id="dl_6e88ee247f921f2db88e";
export const url=new URL("../icons/shift_lock_off-fill.svg?v=2894112a1033d313db18275b2943c1853543cdcd04b2729769f987af8a474d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
