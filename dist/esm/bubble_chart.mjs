export const name="bubble_chart";
export const id="dl_da0a213a6d679f8abc08";
export const url=new URL("../icons/bubble_chart.svg?v=e23cb81c2dcc064e28337a2da393ae474803aef4710ceb9450242a27003a4b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
