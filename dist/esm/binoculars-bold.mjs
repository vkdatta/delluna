export const name="binoculars-bold";
export const id="dl_8da6b246fe8d44bda328";
export const url=new URL("../icons/binoculars-bold.svg?v=08df7e62ef96c3f1522680697a726a3655165ff427369f05f8a5e97b7cad4195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
