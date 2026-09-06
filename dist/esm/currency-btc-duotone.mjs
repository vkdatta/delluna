export const name="currency-btc-duotone";
export const id="dl_f2a9e7e673a54af5bdc1";
export const url=new URL("../icons/currency-btc-duotone.svg?v=afd166d85364dcd0ea4359ae320b872244c78423a1e89187059c99b234f5979e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
