export const name="enhanced_encryption-fill";
export const id="dl_da207ac3d8aa45017d27";
export const url=new URL("../icons/enhanced_encryption-fill.svg?v=5c7790da11ff5e74b1e1e7791ab3909b6e98813f92d2a5e1f37de89c3ebc8184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
