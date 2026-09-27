export const name="upload-simple-light";
export const id="dl_a628699fe079320ad704";
export const url=new URL("../icons/upload-simple-light.svg?v=53ab7d48e4d6f20ae512fd05085ebf10629baada9a3e6cc46cc8c7b9dffcaa3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
