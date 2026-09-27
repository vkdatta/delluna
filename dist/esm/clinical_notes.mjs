export const name="clinical_notes";
export const id="dl_f0350f380060e6dfd685";
export const url=new URL("../icons/clinical_notes.svg?v=88994cf7c4418fca42a5eea86a0c519bc452258b45217775fe793b6e32f8d980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
