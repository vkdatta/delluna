export const name="monitor_weight-fill";
export const id="dl_c1f45beab979815c7c52";
export const url=new URL("../icons/monitor_weight-fill.svg?v=fe422374b9b3ec86b336801476fc7f5110c0c1d04031b582ffa6da9f12b41513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
