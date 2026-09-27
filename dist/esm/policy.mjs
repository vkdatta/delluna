export const name="policy";
export const id="dl_8c7c139d719528d4ecbb";
export const url=new URL("../icons/policy.svg?v=ee9624081297121e5ec2b1ef8197dd05fac74d998fb6d571b55547e8a899decc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
