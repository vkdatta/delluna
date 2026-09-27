export const name="chart-scatter-light";
export const id="dl_608094f264bc4df4ad35";
export const url=new URL("../icons/chart-scatter-light.svg?v=0c242ad92789a545a7e83d01ff4317732b741769728acc9e4154e8802b165ba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
