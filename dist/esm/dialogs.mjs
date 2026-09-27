export const name="dialogs";
export const id="dl_a00b35f3f94fd9348618";
export const url=new URL("../icons/dialogs.svg?v=8342ee15cd47e37c1c32e8e5b70a148f4f68cfaaf6407a3d26931d1371cce2a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
