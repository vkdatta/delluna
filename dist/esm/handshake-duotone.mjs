export const name="handshake-duotone";
export const id="dl_53c1ddda4e064242b28c";
export const url=new URL("../icons/handshake-duotone.svg?v=2deb466d5963562b0eb79942bc2fea8ef2f23d9ea8c50c0880357fbdd2256fec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
