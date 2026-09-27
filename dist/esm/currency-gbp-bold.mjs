export const name="currency-gbp-bold";
export const id="dl_5d261030fb5f4489ac6a";
export const url=new URL("../icons/currency-gbp-bold.svg?v=c402203bdb97005cbbe39d8f67809211aa906261c74862516ee3cb3a799c1190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
