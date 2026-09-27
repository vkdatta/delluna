export const name="currency-eth-duotone";
export const id="dl_7cd9c47e03444e6b8d39";
export const url=new URL("../icons/currency-eth-duotone.svg?v=9b119f964bfb2fb0a4fe489dc517f8d262d64c293fefab4a97085a90f7cf8689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
