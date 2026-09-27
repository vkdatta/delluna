export const name="table_edit-fill";
export const id="dl_09cb40a6055e42e93e8d";
export const url=new URL("../icons/table_edit-fill.svg?v=be5f875aaf1582e3a2ec0508568cfef291cc592a30117ebc41f0352c6252a5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
