export const name="inactive_order";
export const id="dl_fbbab61e92cc43388099";
export const url=new URL("../icons/I/inactive_order.svg?v=419cba0addca10564dab554452db419f85a220b2cb358d240eb5269c3885703f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
