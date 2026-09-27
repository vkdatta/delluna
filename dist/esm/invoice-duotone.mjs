export const name="invoice-duotone";
export const id="dl_c9486bfe9a1649278472";
export const url=new URL("../icons/invoice-duotone.svg?v=7bd836068c98ccbccea278fd074cd2145d7c2f510e43507e56c6f0634f14d48b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
