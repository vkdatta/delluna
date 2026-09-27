export const name="avc";
export const id="dl_8838ce6bb3f9cb8df2d4";
export const url=new URL("../icons/avc.svg?v=b4c37691d4118ac4a7e486fac2b321d74c444b61af8cdbcf4316be570baea334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
