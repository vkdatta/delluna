export const name="monitor_weight_gain-fill";
export const id="dl_f5ef2da3225a68fd85ae";
export const url=new URL("../icons/monitor_weight_gain-fill.svg?v=fbe0acd3a1f10f58c7b98f37a20342a95f83920ecf50d13118d1808eda1a3d03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
