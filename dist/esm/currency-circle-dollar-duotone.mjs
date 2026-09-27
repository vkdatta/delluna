export const name="currency-circle-dollar-duotone";
export const id="dl_2200c30e7e8545949702";
export const url=new URL("../icons/currency-circle-dollar-duotone.svg?v=c6674801cb8692b9d65cf594ad2f7a27f74813be9fa6d6c47c3501c70910926b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
