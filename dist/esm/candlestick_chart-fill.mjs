export const name="candlestick_chart-fill";
export const id="dl_f27f3e948dc5473bbb60";
export const url=new URL("../icons/C/candlestick_chart-fill.svg?v=7e45e5920929dc5fd9cd5a48bbf438f1975d2c8cc260ce9fcb2d1c6be7f71eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
