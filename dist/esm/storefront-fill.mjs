export const name="storefront-fill";
export const id="dl_b08816ef8804240c0839";
export const url=new URL("../icons/storefront-fill.svg?v=e9b09ca7b7f2fdfca524ab204d9b8a736df27ab3d2e5623d0f5ed103b4f92660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
