export const name="virtual-reality-light";
export const id="dl_279e7e6a467c42c6bfbe";
export const url=new URL("../icons/V/virtual-reality-light.svg?v=fae6e67045448b9bb6d38609d502bc2f6838b39dc4adeba9aacd5f1a9f630529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
