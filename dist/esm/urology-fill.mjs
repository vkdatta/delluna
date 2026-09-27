export const name="urology-fill";
export const id="dl_19ad2cf982549116311b";
export const url=new URL("../icons/urology-fill.svg?v=7988bb7ecc3468f598a69de28527c41b10985496b738f9ae7cb664e24fc7455d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
