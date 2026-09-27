export const name="currency-inr-duotone";
export const id="dl_b136d93c80254faa82a6";
export const url=new URL("../icons/currency-inr-duotone.svg?v=ce1304c972a2a9a11f62fc9f48a3b56d437089caae689cb850b5efd976009547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
