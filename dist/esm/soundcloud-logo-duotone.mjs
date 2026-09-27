export const name="soundcloud-logo-duotone";
export const id="dl_d49a4cba179f02ba8485";
export const url=new URL("../icons/soundcloud-logo-duotone.svg?v=e8ee62be32f56282901457e8a3cdb8ead6d3a4645464fbb9fd1cc7c3f31d2dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
