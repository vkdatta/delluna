export const name="currency_bitcoin-fill";
export const id="dl_8a48ff1f6492ecf28fac";
export const url=new URL("../icons/currency_bitcoin-fill.svg?v=e607b2cd56e7a4c68247760d148ce2310d5cb006579f6d4edfd00c8bbeb5ef25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
