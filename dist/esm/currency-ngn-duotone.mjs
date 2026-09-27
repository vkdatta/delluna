export const name="currency-ngn-duotone";
export const id="dl_25024593b3874ba4b481";
export const url=new URL("../icons/currency-ngn-duotone.svg?v=4c85a71aa550d93547b80253cd0c774dc959769cfff3b840d296fd507275019d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
