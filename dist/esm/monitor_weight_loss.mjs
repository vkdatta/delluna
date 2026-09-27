export const name="monitor_weight_loss";
export const id="dl_44d4eefd03f43618c96f";
export const url=new URL("../icons/monitor_weight_loss.svg?v=66024f5d3c9513376ed0e4da1d53ab1d7e0356a3b683b2dcaa5a94f37e937033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
