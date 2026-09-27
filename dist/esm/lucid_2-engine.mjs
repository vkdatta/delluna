export const name="lucid_2-engine";
export const id="dl_b228840a3f5e4bcf9892";
export const url=new URL("../icons/lucid_2-engine.svg?v=dafcb55b05e91f799a6f8e214b798a15c03de8d5088690931ee9fa6f99862b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
