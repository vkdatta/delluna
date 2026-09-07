export const name="wallet-bold";
export const id="dl_4ec141f136ce4137b27a";
export const url=new URL("../icons/W/wallet-bold.svg?v=85646df57b27a2acac0a8afad45cde5b0ef7b60248b5e31bb5486f47d96c8097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
