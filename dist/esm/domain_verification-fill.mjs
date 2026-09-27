export const name="domain_verification-fill";
export const id="dl_e15b3068410ba58f250b";
export const url=new URL("../icons/domain_verification-fill.svg?v=b7c3d1828ef9f53ce1db9d7ec7f4d018f9fac6b20c29064c7345eddbec4df7ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
