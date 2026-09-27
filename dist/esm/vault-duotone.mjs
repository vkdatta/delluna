export const name="vault-duotone";
export const id="dl_fb7cd28e5db89ebbc708";
export const url=new URL("../icons/vault-duotone.svg?v=810968760608ac42439ba059dd613417c1869152597046bd053a2061c4e3aea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
