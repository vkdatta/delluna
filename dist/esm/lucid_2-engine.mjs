export const name="lucid_2-engine";
export const id="dl_b228840a3f5e4bcf9892";
export const url=new URL("../icons/lucid_2-engine.svg?v=eac689012cde4bcbfda8dc4ad8f73f9de8c016ce849e102b9ff1dfbb57dbb0be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
