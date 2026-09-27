export const name="lucid_1-bone";
export const id="dl_0424b5e9416640ba9645";
export const url=new URL("../icons/lucid_1-bone.svg?v=b9f542b9f815594b73d354c446968c263f6884e1b09e9dc25fdb1342684e93bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
