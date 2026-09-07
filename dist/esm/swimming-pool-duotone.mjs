export const name="swimming-pool-duotone";
export const id="dl_a6e2ec37d12d4947aee7";
export const url=new URL("../icons/S/swimming-pool-duotone.svg?v=f286c885444501e506a91d45f904e652d1892f07b8fcf14e12cdf68b34b32459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
