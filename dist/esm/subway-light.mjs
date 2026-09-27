export const name="subway-light";
export const id="dl_0a59c0ebd7d2abe13ea0";
export const url=new URL("../icons/subway-light.svg?v=c30f19d0fc82fc81eacdd1da0f4922f7fd8699048b8cd11412d284ef91087b82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
