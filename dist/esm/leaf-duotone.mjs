export const name="leaf-duotone";
export const id="dl_721585956dbb45b8b9a7";
export const url=new URL("../icons/leaf-duotone.svg?v=a3e327a67d41f2337ed918e7a9eaaf3701354be0cdc766650d39dfe56c7951eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
