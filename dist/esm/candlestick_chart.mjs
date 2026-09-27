export const name="candlestick_chart";
export const id="dl_b42732a9357bcdb1c679";
export const url=new URL("../icons/candlestick_chart.svg?v=804acc27eda12cd246968996cd56df18fe95e5018b71595a4deae22bd9331912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
