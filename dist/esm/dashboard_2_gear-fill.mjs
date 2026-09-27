export const name="dashboard_2_gear-fill";
export const id="dl_5f2edf39ea23203bd020";
export const url=new URL("../icons/dashboard_2_gear-fill.svg?v=f3f3366e8490d67db96c04cf4a6a7370178dc73c9162c165b218e8cd3fec1f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
