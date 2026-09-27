export const name="lte_plus_mobiledata_badge-fill";
export const id="dl_0efde4bafd4ebd7e256b";
export const url=new URL("../icons/lte_plus_mobiledata_badge-fill.svg?v=fb070eaa59ba19dac93fb9ad623ce63d90d3a0ed97d2550a531c24d4a676bafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
