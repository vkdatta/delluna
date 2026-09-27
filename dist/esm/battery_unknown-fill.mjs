export const name="battery_unknown-fill";
export const id="dl_e526ede42ad131f9a493";
export const url=new URL("../icons/battery_unknown-fill.svg?v=356eec99cd9e97f73610549bec9472eda3c87a97f2d7d9cea4edcc1847b9b6d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
