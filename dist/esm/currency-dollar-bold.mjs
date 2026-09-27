export const name="currency-dollar-bold";
export const id="dl_42bff867295546678cb1";
export const url=new URL("../icons/currency-dollar-bold.svg?v=76a0f5f97560536c030320706abe5dd10f3f78a1df84413a77a5fc727102d39a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
