export const name="convert_to_text";
export const id="dl_591ccccbacba62763d99";
export const url=new URL("../icons/convert_to_text.svg?v=e4d2551ed78da3832a4d9acb9aad755bf7eae5103cb61ae7f530716fc80f60ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
