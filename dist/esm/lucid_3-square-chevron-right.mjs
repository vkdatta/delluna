export const name="lucid_3-square-chevron-right";
export const id="dl_1fe0be603e064b628abc";
export const url=new URL("../icons/lucid_3-square-chevron-right.svg?v=a7347190cb05aa05240acc41319527d5db9624a567127c37c3450f8dbcc13e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
