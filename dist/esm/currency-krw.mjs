export const name="currency-krw";
export const id="dl_14d87bab18da456bb148";
export const url=new URL("../icons/currency-krw.svg?v=17a4086dcd9861b6c3a35ad74dd637395ff03e8568523d4ea508e0425d31e70b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
