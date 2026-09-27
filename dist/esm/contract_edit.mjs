export const name="contract_edit";
export const id="dl_483021331d884b068c16";
export const url=new URL("../icons/contract_edit.svg?v=a8410e0daab04124fbe6ee8b21df38135091a7e85843c03b4cd3921a70ee79fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
