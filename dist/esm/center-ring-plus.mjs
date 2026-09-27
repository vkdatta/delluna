export const name="center-ring-plus";
export const id="dl_7ecaba49e67c6ebba514";
export const url=new URL("../icons/center-ring-plus.svg?v=b28d3be5b3d3a76dff8a139e3a1876e42f161cc9687f375a0823c68fa799066b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
