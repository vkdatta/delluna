export const name="currency-inr-duotone";
export const id="dl_b136d93c80254faa82a6";
export const url=new URL("../icons/currency-inr-duotone.svg?v=2158a3187f3dc12eb6488d00f7c92681fb327911647516c2137de31fba0e0455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
