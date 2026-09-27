export const name="table_rows_narrow-fill";
export const id="dl_ff120977ffd14541b665";
export const url=new URL("../icons/table_rows_narrow-fill.svg?v=1a17a932ed901261078dd72910b198eef20668c0e7b674f707987f19cea6151a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
