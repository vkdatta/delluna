export const name="currency-ngn-duotone";
export const id="dl_25024593b3874ba4b481";
export const url=new URL("../icons/currency-ngn-duotone.svg?v=e6ad727e76a1ee97aa244237760e0abd19dea6b6682c28fbb6a8ca4639776252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
