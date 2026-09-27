export const name="question-mark-fill";
export const id="dl_0de55f2a150d4dd7b042";
export const url=new URL("../icons/question-mark-fill.svg?v=d5ad2cfdc9d38e0376c01f626dfa355a4e8c9f2074b4cf57ce9c78e9a6295a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
