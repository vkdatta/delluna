export const name="share-network-duotone";
export const id="dl_5109d67c0f46e8376e9c";
export const url=new URL("../icons/share-network-duotone.svg?v=36b999f9e34e9d44e44311fe2d94eb53fb9880f51b35f0a39ede3933b1a80f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
