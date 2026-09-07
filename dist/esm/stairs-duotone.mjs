export const name="stairs-duotone";
export const id="dl_3947aba6c111434dbae1";
export const url=new URL("../icons/S/stairs-duotone.svg?v=0c0e6cfdcfca127245150c30c083b49185022e841162bf14cf540fcc72a7c70c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
