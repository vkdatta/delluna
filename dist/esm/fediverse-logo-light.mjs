export const name="fediverse-logo-light";
export const id="dl_5b125990d7e04385a62b";
export const url=new URL("../icons/fediverse-logo-light.svg?v=af3b405f5507e799451dd64158302407f37259015247e6668be722fa249e0e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
