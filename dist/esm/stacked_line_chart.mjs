export const name="stacked_line_chart";
export const id="dl_ccdf4e6f1bc60e6f78ed";
export const url=new URL("../icons/stacked_line_chart.svg?v=8452b6870773799d09ec0c0d14dd0dc696f5d1dfa355e54a64a114835163466c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
