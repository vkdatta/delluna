export const name="monitor_weight-fill";
export const id="dl_515c210320db50c761e0";
export const url=new URL("../icons/monitor_weight-fill.svg?v=5847eb58e5354c4c0c19171f7d4f034b6ef87dcf8ed5f44d39befc245fc452bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
