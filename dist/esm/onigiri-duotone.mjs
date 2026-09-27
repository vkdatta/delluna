export const name="onigiri-duotone";
export const id="dl_bebaf857f03e41448eb6";
export const url=new URL("../icons/onigiri-duotone.svg?v=dee5c5efb2e0f6bd07eaaa2392e03a5f47f9f5b74b47991b81c9ba5f2a91a30b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
