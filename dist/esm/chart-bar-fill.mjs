export const name="chart-bar-fill";
export const id="dl_418add67ae034c309424";
export const url=new URL("../icons/chart-bar-fill.svg?v=0bbdd85e9bd113c471fb9e35440c60323ea575097008bef67aab684748bb0033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
