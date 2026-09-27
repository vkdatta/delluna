export const name="currency-ngn-duotone";
export const id="dl_25024593b3874ba4b481";
export const url=new URL("../icons/currency-ngn-duotone.svg?v=fa9429dd722fad5227f57492ed26801c7b537719996a24874e759b7b9ff0ed0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
