export const name="wallet-thin";
export const id="dl_9c9e41952be29c8d23b9";
export const url=new URL("../icons/wallet-thin.svg?v=093d8954d63da6713e23029d667579c346d2f6d3b74ccc5012474968fe070655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
