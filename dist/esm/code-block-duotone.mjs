export const name="code-block-duotone";
export const id="dl_cba9e0bee4324aa79a91";
export const url=new URL("../icons/code-block-duotone.svg?v=82927d13f60bb5a06d98993e4d16a2dd62bfe67a26ed69e8b2dc9524acd96446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
