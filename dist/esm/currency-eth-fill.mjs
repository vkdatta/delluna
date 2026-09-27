export const name="currency-eth-fill";
export const id="dl_7540f0f0faae4d2daaf4";
export const url=new URL("../icons/currency-eth-fill.svg?v=9b4523306a49b7171576ff63102e391ca32147dca842310d0e36f17a5272df8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
