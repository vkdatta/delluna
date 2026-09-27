export const name="less-than";
export const id="dl_e6bbe4fcf95948dfabbd";
export const url=new URL("../icons/less-than.svg?v=f5f82f1907f5c5d564e9f1952a7c9527e62cc53580f2f8d7521242f8302a0a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
