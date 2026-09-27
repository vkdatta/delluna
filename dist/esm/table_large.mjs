export const name="table_large";
export const id="dl_486a2a1d84cfcb99a6d1";
export const url=new URL("../icons/table_large.svg?v=fbc48ecff3bbeacbfadf4fdc1cd55410fb906ef8a290f2b82c6d4fa3cee6f5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
