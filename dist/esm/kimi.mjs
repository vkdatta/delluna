export const name="kimi";
export const id="dl_32d66e8d4269417a8176";
export const url=new URL("../icons/newd7/kimi.svg?v=3b38ec67f0332785bada06d20e5c0c8dc52d2f396f4dcbd92a4e34e77fbdd495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
