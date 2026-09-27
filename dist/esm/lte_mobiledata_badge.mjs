export const name="lte_mobiledata_badge";
export const id="dl_e2ed03df73bdf0595f95";
export const url=new URL("../icons/lte_mobiledata_badge.svg?v=3ea406e09ea5ad63458f26b50f7fc041d0739929d34c55e70407db6e9dfebe2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
