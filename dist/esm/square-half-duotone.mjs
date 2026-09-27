export const name="square-half-duotone";
export const id="dl_8a5f8d19df3303c5d0da";
export const url=new URL("../icons/square-half-duotone.svg?v=1e9d44fa62fc9a50212a3a55513b49051b5bf16f8b513170b638acce0d47620b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
