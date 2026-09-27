export const name="lucid_3-square-arrow-left";
export const id="dl_c4bc146b6e2747bfaa7f";
export const url=new URL("../icons/lucid_3-square-arrow-left.svg?v=790ee4b03e0ddc320d04f1438a86b7a1bc96ea58d395629235979b12804293da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
