export const name="lucid_3-square-chart-gantt";
export const id="dl_705560aa35f44078a9de";
export const url=new URL("../icons/lucid_3-square-chart-gantt.svg?v=20dccf82a536ed1d4ce93428c22a4621fe9246cc7193cf0bc4cdf3f41c6ed814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
