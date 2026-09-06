export const name="currency-cny-bold";
export const id="dl_e1578fe2273e46bcaadc";
export const url=new URL("../icons/currency-cny-bold.svg?v=a3833830c6e3ab9299d3974a139063b92a95a9536e08f2986f6dae06c032cd75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
