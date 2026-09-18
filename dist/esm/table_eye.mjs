export const name="table_eye";
export const id="dl_b21f2bf9eabf4e1d890c";
export const url=new URL("../icons/T/table_eye.svg?v=36c4700c62e3e516a8c39ce7d7ff31931ca797bc527ad40dde18271f3168dba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
