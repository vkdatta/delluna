export const name="enhanced_encryption";
export const id="dl_6c89d6c94a3a1499f9f6";
export const url=new URL("../icons/enhanced_encryption.svg?v=383c11f266f2ec07cfa58ebec7725f326c30d36059be6be9045d7e26ae44ebd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
