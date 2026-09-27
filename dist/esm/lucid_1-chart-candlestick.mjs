export const name="lucid_1-chart-candlestick";
export const id="dl_4ebb82042b834c3aa7d5";
export const url=new URL("../icons/lucid_1-chart-candlestick.svg?v=3859e902a704d8ea53978b52c1b52891426b9f697c437bf3a4fcad1e5356e383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
