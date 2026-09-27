export const name="candlestick_chart";
export const id="dl_c348b55c01f796753e25";
export const url=new URL("../icons/candlestick_chart.svg?v=863b8172f4d1f98d075e7a0edb7911b0e62cc13d228e78897d8aab7774509ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
