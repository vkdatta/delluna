export const name="data_table-fill";
export const id="dl_1f2e56e095076b5ddb9b";
export const url=new URL("../icons/data_table-fill.svg?v=7623431ba47f6e9249e8c0443c980f3b059fba557b407de63b90509a41f33891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
