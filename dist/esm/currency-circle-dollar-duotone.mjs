export const name="currency-circle-dollar-duotone";
export const id="dl_2200c30e7e8545949702";
export const url=new URL("../icons/currency-circle-dollar-duotone.svg?v=3d4a7ff3c9af21f1790e7af0e40b83e4789b7584f5dfcede56e624029053994b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
