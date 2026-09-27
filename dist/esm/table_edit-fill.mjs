export const name="table_edit-fill";
export const id="dl_5b8b7bace16cf03e70e1";
export const url=new URL("../icons/table_edit-fill.svg?v=2389824a6a616179145f23a8ccee2a82358e12e0f6424ffd4215ce7e2cfb39ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
