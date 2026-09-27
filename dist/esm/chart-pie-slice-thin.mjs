export const name="chart-pie-slice-thin";
export const id="dl_82d654aed0ae41979e12";
export const url=new URL("../icons/chart-pie-slice-thin.svg?v=ff4393ce550f55492b0865fbbe461eefa6562c503f8a86a897d4d5678421364d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
