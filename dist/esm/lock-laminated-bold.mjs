export const name="lock-laminated-bold";
export const id="dl_f8645f73505241b7b38b";
export const url=new URL("../icons/lock-laminated-bold.svg?v=b974eb912cd05a054f1c90f90359ab079b8002e1b70477233b54f5cda541c37e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
