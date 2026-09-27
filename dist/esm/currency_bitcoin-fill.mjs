export const name="currency_bitcoin-fill";
export const id="dl_c5c32d05591ad962c7f2";
export const url=new URL("../icons/currency_bitcoin-fill.svg?v=fab71517a8f1272807a5816ea4d2e1e9091cb7a0741642ceb20edb2e4b1e6b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
