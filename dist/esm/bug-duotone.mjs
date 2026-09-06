export const name="bug-duotone";
export const id="dl_0768483c9c6040c2b99f";
export const url=new URL("../icons/bug-duotone.svg?v=cdcb8c9b604c6c3d5fa6ff8b31ca8a9520570415cc30035cb39cb7cb9c10d1aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
