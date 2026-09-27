export const name="user-circle-dashed-duotone";
export const id="dl_4cb0e692526b985be749";
export const url=new URL("../icons/user-circle-dashed-duotone.svg?v=d5919960bf2463a623f200fc720fef45eb81ffa7ed9a6ed2cbaef4c18287bf59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
