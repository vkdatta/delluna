export const name="steering-wheel-duotone";
export const id="dl_629f16afb5abf0625ebe";
export const url=new URL("../icons/steering-wheel-duotone.svg?v=b9ba405120639cc46db7138c712a38e77694105e3861992e7a7cf4dd404b9cf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
