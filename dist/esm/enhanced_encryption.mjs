export const name="enhanced_encryption";
export const id="dl_6a4c27b9fa5dc2ecb9c0";
export const url=new URL("../icons/enhanced_encryption.svg?v=ad9e8c5a344c742954cdae0d0ae749c03734eb73f563a83746eee91a7f148cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
