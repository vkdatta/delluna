export const name="signature-light";
export const id="dl_095e6e753d244ed39803";
export const url=new URL("../icons/S/signature-light.svg?v=ad20bee6faa3ea2bccb46af603017d40bb7d5a6809066c64211060efc519117f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
