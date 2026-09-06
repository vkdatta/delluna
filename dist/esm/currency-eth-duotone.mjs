export const name="currency-eth-duotone";
export const id="dl_7cd9c47e03444e6b8d39";
export const url=new URL("../icons/currency-eth-duotone.svg?v=32e65e98fa067ff148121bd3e40f996c428f5d8e64885e374cf5e2d9ad7c495d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
