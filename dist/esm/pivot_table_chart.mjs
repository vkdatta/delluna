export const name="pivot_table_chart";
export const id="dl_e8bfcbef341491c9c4c0";
export const url=new URL("../icons/pivot_table_chart.svg?v=f154ddcce49de733c9d500a31bb7d1ec02066188d34b9399dc352b1ae70fba27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
