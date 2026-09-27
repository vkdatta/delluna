export const name="lte_plus_mobiledata-fill";
export const id="dl_7b530f9f2b6b1271f8a3";
export const url=new URL("../icons/lte_plus_mobiledata-fill.svg?v=2f552845894bfd56a3508b3868a2ffe5369a1f841d3717fe1bae7be3d3bdc40f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
