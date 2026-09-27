export const name="file-ppt-duotone";
export const id="dl_ad21276e08c14bd7a92a";
export const url=new URL("../icons/file-ppt-duotone.svg?v=301cb9307f0247210bd33e16989d155ca5d0c3c5265b1241ecc2abb3a7510172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
