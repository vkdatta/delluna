export const name="process_chart-fill";
export const id="dl_ca1cf12537a407e86a9e";
export const url=new URL("../icons/process_chart-fill.svg?v=5124cf9f22bdd72a8518f36e703716f1e18f9d0c45097b75d0e21889e15241dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
