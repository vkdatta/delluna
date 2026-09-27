export const name="monitor_weight-fill";
export const id="dl_bfee254a9737d5d39408";
export const url=new URL("../icons/monitor_weight-fill.svg?v=ca4c134e06f3c1346fa54553f876bdcf27b37a40470d8581398702b2b036aa22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
