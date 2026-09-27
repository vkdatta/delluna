export const name="local_laundry_service";
export const id="dl_efdaab49fa3e8fd11770";
export const url=new URL("../icons/local_laundry_service.svg?v=3525c0f69517d4f24a24d1eb666abeee514d619fafc3b573c606169581449389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
