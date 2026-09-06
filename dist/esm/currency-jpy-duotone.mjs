export const name="currency-jpy-duotone";
export const id="dl_d24ea3abeebc464286f0";
export const url=new URL("../icons/currency-jpy-duotone.svg?v=36fac6c3b5d18de329b5b5a17516f1318a7cdb99a972501dfebcb0b213e8b34a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
