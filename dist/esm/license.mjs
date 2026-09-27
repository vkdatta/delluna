export const name="license";
export const id="dl_ee13f8e5c31a9617de3a";
export const url=new URL("../icons/license.svg?v=81758374c0f2194bd0bc3c4927dcd2b9e08c97b2f004e34d6c5e41f488a0f254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
