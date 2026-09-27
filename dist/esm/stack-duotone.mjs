export const name="stack-duotone";
export const id="dl_8295105a72b215268e5f";
export const url=new URL("../icons/stack-duotone.svg?v=9085b66519ec9cfc56efd2c6a8af81da02b767d983ef87a215f02d6a93ce2e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
