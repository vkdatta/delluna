export const name="currency-eth-duotone";
export const id="dl_7cd9c47e03444e6b8d39";
export const url=new URL("../icons/currency-eth-duotone.svg?v=ec62f4450a1115575cd29eeb432130b0f9d5574fcfeab421369f41e591f41bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
