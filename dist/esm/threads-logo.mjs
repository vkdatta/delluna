export const name="threads-logo";
export const id="dl_fdaa53207ab85e50c4ee";
export const url=new URL("../icons/threads-logo.svg?v=8bccd10663e537dfb8479c66d7269c32b7cb0c097f78f2eec186ab12b1bdf87f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
