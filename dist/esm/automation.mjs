export const name="automation";
export const id="dl_95c59885379552213e4a";
export const url=new URL("../icons/automation.svg?v=fac536185e36f008d42a274855a0aba44411855c7da2f0732ec920f4672ea446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
