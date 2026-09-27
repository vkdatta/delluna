export const name="lucid_3-pencil-line";
export const id="dl_06b3aae398f14f9287ee";
export const url=new URL("../icons/lucid_3-pencil-line.svg?v=d81ea42de0c59c9c91d6b85d0c3902050b062d9e45c20ab3a4da5713a3b6440d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
