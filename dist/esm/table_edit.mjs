export const name="table_edit";
export const id="dl_d1e78220cb971ea0bd9a";
export const url=new URL("../icons/table_edit.svg?v=7066a29611601339d92e6c657e2e796b9fac79c0c5ca8a606a2c1598ad0b2cd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
