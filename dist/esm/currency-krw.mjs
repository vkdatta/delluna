export const name="currency-krw";
export const id="dl_14d87bab18da456bb148";
export const url=new URL("../icons/currency-krw.svg?v=6067722a8755bb86cdfddb52a21490c77a85e8ca1ce3610cd427d3feeacf2a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
