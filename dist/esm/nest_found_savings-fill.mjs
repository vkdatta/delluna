export const name="nest_found_savings-fill";
export const id="dl_471beacef4384fe58e40";
export const url=new URL("../icons/nest_found_savings-fill.svg?v=deca534c7d8e0ac98bbbe99e6b89cf1620d36619ddfcb159b1507870ae3c0ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
