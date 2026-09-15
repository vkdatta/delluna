export const name="data_table";
export const id="dl_48627093c27546058341";
export const url=new URL("../icons/D/data_table.svg?v=1b7372cec142adeaa6d4c16cf758e4e7486299e0363803861f37eda565f04b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
