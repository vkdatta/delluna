export const name="table_rows_narrow";
export const id="dl_9893fc5e2448d703b053";
export const url=new URL("../icons/table_rows_narrow.svg?v=b2c2eecc661a1a57bb2c69d709aa77e08c8e1b32ea12bec187a064cd0589fde5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
