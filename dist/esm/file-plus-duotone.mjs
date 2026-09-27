export const name="file-plus-duotone";
export const id="dl_6bee82b70f394b978d67";
export const url=new URL("../icons/file-plus-duotone.svg?v=80b3811f5688b402c1bcc7d01451ac6ca2cafd904a5d33fc0ccb683f2f000b9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
