export const name="shift_lock_off-fill";
export const id="dl_959d473d01716276083a";
export const url=new URL("../icons/shift_lock_off-fill.svg?v=2fed7ac50a231d900a61952e727bad896f8f02384e4ee533ac52c44f4170640a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
