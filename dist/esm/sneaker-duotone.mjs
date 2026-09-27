export const name="sneaker-duotone";
export const id="dl_48a0bf5778d4005f5667";
export const url=new URL("../icons/sneaker-duotone.svg?v=40895be61d686c2ef6707a91e73cc6df4174b27d9ee3ced854512d3f8ce6fbf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
