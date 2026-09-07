export const name="code-block-duotone";
export const id="dl_cba9e0bee4324aa79a91";
export const url=new URL("../icons/code-block-duotone.svg?v=fa052a0fad802943cba136f99da1a3d5043a1c9ab04d2557450f304df230d3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
