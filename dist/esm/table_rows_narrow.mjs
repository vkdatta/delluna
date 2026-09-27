export const name="table_rows_narrow";
export const id="dl_1f64490af6f472fa0773";
export const url=new URL("../icons/table_rows_narrow.svg?v=4f86326b158d987129f35a70e47fd0cf42bc1d7a725b021937ce6202f5234ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
