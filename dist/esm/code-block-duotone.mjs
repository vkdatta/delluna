export const name="code-block-duotone";
export const id="dl_cba9e0bee4324aa79a91";
export const url=new URL("../icons/code-block-duotone.svg?v=94fb683488dd813476a37d3a91a54fb01404569b312d56166947644245f71585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
