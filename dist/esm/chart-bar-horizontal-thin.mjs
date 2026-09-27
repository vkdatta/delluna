export const name="chart-bar-horizontal-thin";
export const id="dl_4c46c98d9bd24d898510";
export const url=new URL("../icons/chart-bar-horizontal-thin.svg?v=d4c085f6d8bb0e978d62b0d88b16103ef10d3273b5992fe7d304019c799cf9cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
