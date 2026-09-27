export const name="currency-jpy-duotone";
export const id="dl_d24ea3abeebc464286f0";
export const url=new URL("../icons/currency-jpy-duotone.svg?v=940dac9032e0e8b7332b29affc811f0fea7995de88f2a30ff955a8fa3cfee4ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
