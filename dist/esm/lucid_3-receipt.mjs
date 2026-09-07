export const name="lucid_3-receipt";
export const id="dl_509c6664f36c44ac84df";
export const url=new URL("../icons/lucid_3-receipt.svg?v=7c7414ede80640b7b952e95e959e932785e2b8063bbeb7d9b7607357803e5363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
