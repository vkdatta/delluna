export const name="communities";
export const id="dl_14746e242f2f4f1e8a89";
export const url=new URL("../icons/C/communities.svg?v=393b548aad4949b59ca8d230e0ffb03aadb1f323595524f0a8f63c70afea0026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
