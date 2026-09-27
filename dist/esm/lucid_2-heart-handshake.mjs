export const name="lucid_2-heart-handshake";
export const id="dl_b36807da6a454a8abc5e";
export const url=new URL("../icons/lucid_2-heart-handshake.svg?v=9c51f910fd478beb342c8d4e9c13f0585aea5c0cd36c31ea0b5c3718cdc0f226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
