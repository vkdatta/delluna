export const name="coin-vertical-duotone";
export const id="dl_cf9f18f330a34313a22c";
export const url=new URL("../icons/coin-vertical-duotone.svg?v=c18dd878b46ea9e8af38a24567910c03d5e48c33c808d962aac88642a470a9e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
