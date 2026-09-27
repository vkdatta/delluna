export const name="bar_chart_off-fill";
export const id="dl_f3e9d36389aaa84c4a03";
export const url=new URL("../icons/bar_chart_off-fill.svg?v=ec7aa505f3971aa0a4044de7dbbe327ff5bd4784b8d5ef78070c0ee210d56cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
