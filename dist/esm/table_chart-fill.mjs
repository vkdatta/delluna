export const name="table_chart-fill";
export const id="dl_5cebe19306b2b5e732d4";
export const url=new URL("../icons/table_chart-fill.svg?v=b3592522dae1f8207d2e9ef981523908b8bec43b1c5ecc83c258858197f48d8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
