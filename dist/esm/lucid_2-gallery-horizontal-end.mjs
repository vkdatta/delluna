export const name="lucid_2-gallery-horizontal-end";
export const id="dl_1fba4281eae64f7fb5e1";
export const url=new URL("../icons/lucid_2-gallery-horizontal-end.svg?v=79e15277260e4edbb0874a40c25b9a4a51c18a3481175f0a3735e342321cdc34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
