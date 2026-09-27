export const name="caret-right-fill";
export const id="dl_99bf66255fdb446da1ee";
export const url=new URL("../icons/caret-right-fill.svg?v=c8d091f67b890c28cf5053d0586dcb254317d216c373e0ad76e07c9a707f9674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
