export const name="contextual_token_add";
export const id="dl_4a9e05ae60b77a799a06";
export const url=new URL("../icons/contextual_token_add.svg?v=a59424653f82977d791742475f55ddba30f2a2749686813ab78b79ae0672eae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
