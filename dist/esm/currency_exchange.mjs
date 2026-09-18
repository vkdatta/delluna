export const name="currency_exchange";
export const id="dl_88e86dbb1c7c4cbd8f1e";
export const url=new URL("../icons/currency_exchange.svg?v=a1c3727e094a56c4c6985d7ab3e560fc731187a690014809daf64b6659fae44b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
