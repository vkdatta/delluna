export const name="currency-circle-dollar-duotone";
export const id="dl_2200c30e7e8545949702";
export const url=new URL("../icons/currency-circle-dollar-duotone.svg?v=3a46765f8369ac95307dae79cb04970e8a19ec96bfce9703766bf284fa259413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
