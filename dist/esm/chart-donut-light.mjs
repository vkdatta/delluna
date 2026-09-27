export const name="chart-donut-light";
export const id="dl_966c086572a34837a08b";
export const url=new URL("../icons/chart-donut-light.svg?v=a6775d62e39406407b91c3ae8762262381bd0d83341c1bacb8170f66b3029355",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
