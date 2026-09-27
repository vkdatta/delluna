export const name="expand_content-fill";
export const id="dl_37b85b382370c6585c66";
export const url=new URL("../icons/expand_content-fill.svg?v=4e9e1be5035b22305b61a0ef6d819e569fa60a762fae3ddc5b29753aa03368a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
