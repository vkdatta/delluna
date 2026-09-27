export const name="avocado-light";
export const id="dl_97b43e7b4b984b85b4ab";
export const url=new URL("../icons/avocado-light.svg?v=68d62db85f4f0bf2b77c49f3e2e028e32b93792bd19b3e1db742b5b466e10dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
