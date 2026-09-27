export const name="currency-rub-fill";
export const id="dl_f124a87571d141f99368";
export const url=new URL("../icons/currency-rub-fill.svg?v=5479464a096b08681d21b1a50af31f96dcec341bd8c9cb16c56b67ba6d327090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
