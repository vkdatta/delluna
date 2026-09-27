export const name="vault-duotone";
export const id="dl_fc8f133a8cb9715c3b6f";
export const url=new URL("../icons/vault-duotone.svg?v=9bb1692d3c4814303340ffb11af4470f8023a88722eb11ec39cc5f4e67aacd36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
