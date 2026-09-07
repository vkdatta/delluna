export const name="table-fill";
export const id="dl_38df9cc5f000468db216";
export const url=new URL("../icons/T/table-fill.svg?v=f4303e974e7e3f42350151aa9bfd5d402f27972dea71d8cac0c661492acc7de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
