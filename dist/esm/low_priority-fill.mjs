export const name="low_priority-fill";
export const id="dl_95ee7b21c4c44a51203c";
export const url=new URL("../icons/low_priority-fill.svg?v=bf300f28ac4a1e7f6c7a782a225f2ff2b17f8c12fb8de4d13ac51c3b34cc8a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
