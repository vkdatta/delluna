export const name="legend_toggle-fill";
export const id="dl_f844381e7a0d33da0c9c";
export const url=new URL("../icons/legend_toggle-fill.svg?v=30a8799d93cd378b5fa012c909bc829ed2b335059803fea647520faca5030209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
