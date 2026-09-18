export const name="inactive_order-fill";
export const id="dl_d32ffea141ac4c889576";
export const url=new URL("../icons/I/inactive_order-fill.svg?v=1b0835046a086dfa97b45b0809a4815befa38ceb0ad8af4d21e57524f71491b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
