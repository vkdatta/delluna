export const name="deck";
export const id="dl_836c88a8a67135e7d776";
export const url=new URL("../icons/deck.svg?v=01bdb3c236535311f14ebd9c82d863b485e992e60ec7712dad2ed4dc5420c2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
