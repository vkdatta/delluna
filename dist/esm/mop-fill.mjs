export const name="mop-fill";
export const id="dl_d17db81fa8c24ca29e30";
export const url=new URL("../icons/mop-fill.svg?v=0b68965e301f0d119c778007396a50159a634b5f20b298d29d1725f892c96cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
