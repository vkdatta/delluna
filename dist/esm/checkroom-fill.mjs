export const name="checkroom-fill";
export const id="dl_aacdcdf8ae85bf327c09";
export const url=new URL("../icons/checkroom-fill.svg?v=bf05a5371b1d3670e579625c1aad7f9abffd0b3e2364656a794da6d2b9b6868c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
