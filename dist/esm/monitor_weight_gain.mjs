export const name="monitor_weight_gain";
export const id="dl_a221716b7f0b1d18c5fb";
export const url=new URL("../icons/monitor_weight_gain.svg?v=63c28da1160471795eb9f2334ed73cdc1d6ec58917108d0a633eb3cd306232d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
