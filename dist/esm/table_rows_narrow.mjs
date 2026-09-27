export const name="table_rows_narrow";
export const id="dl_c75bd2ec1f637e38515b";
export const url=new URL("../icons/table_rows_narrow.svg?v=984de9bbc18a7e6fdbe11317cc05069ce3457583387baf932e5423925ac7619c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
