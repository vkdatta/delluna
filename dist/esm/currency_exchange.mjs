export const name="currency_exchange";
export const id="dl_bba94844f735c2991dbd";
export const url=new URL("../icons/currency_exchange.svg?v=9e231b5cbe2118cb9e90111e532ab4ac52e6bf45439ae5230e5b9bfe2dd7dbec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
