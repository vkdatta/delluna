export const name="lucid_3-panel-right";
export const id="dl_ed19e1b7dcd245858b0a";
export const url=new URL("../icons/lucid_3-panel-right.svg?v=f5cd9cae3742fea8f9bfe4bf3b939fb1bcb5bde5a20992f04f04bf3861257145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
