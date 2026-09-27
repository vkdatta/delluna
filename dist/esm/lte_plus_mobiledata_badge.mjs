export const name="lte_plus_mobiledata_badge";
export const id="dl_be16d9013e7ced03f688";
export const url=new URL("../icons/lte_plus_mobiledata_badge.svg?v=a534ce585500ba490eaf16fbf3165022661bc552a5e1317c0bd9ae00242c0efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
