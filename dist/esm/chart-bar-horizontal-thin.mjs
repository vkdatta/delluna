export const name="chart-bar-horizontal-thin";
export const id="dl_4c46c98d9bd24d898510";
export const url=new URL("../icons/chart-bar-horizontal-thin.svg?v=1c4ea14df96cf698ab41edbf16e28d2f603bf6f5b82f6b1285fdd9ffea8d0edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
