export const name="monitor_weight";
export const id="dl_e2d3ebaa6ae26f5a223d";
export const url=new URL("../icons/monitor_weight.svg?v=51d813c7529ca4e1877cbf06dcb8e63828b358b7743d03d314d2c890e48d8a9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
