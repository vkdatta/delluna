export const name="ods-fill";
export const id="dl_d7f9840de6f1ffeeb90a";
export const url=new URL("../icons/ods-fill.svg?v=7aa655b1c9e223efcaa942c4a278078aeff3331230276304582e430a7da2424e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
