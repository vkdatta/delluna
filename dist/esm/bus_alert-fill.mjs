export const name="bus_alert-fill";
export const id="dl_74273b6efd12b2280d4d";
export const url=new URL("../icons/bus_alert-fill.svg?v=5cca5a0272a9e79fc3f3b9dd88326336a7012fae645a6344fdc73f8cb3b72b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
