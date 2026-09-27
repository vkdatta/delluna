export const name="enhanced_encryption-fill";
export const id="dl_4e7ba0b032351d4037d2";
export const url=new URL("../icons/enhanced_encryption-fill.svg?v=c56974d82fb61ba10768566fd6ba5f7c3c677acf9390826a1c59386b6d7c33b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
