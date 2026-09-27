export const name="chart-donut";
export const id="dl_2178753e95194488b28b";
export const url=new URL("../icons/chart-donut.svg?v=c56373d6c29e94c9fd33fc808038450b290c231d2501bf575f0560b0a9a269c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
