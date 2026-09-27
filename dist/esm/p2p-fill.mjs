export const name="p2p-fill";
export const id="dl_a6eba03b39a8aef33787";
export const url=new URL("../icons/p2p-fill.svg?v=ee9cefb80310d104dd51bfae3a5457b4ff6effadb1d4bd3374846e8eafa2a3c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
