export const name="chart-scatter-bold";
export const id="dl_1d521f5184824ba68e78";
export const url=new URL("../icons/chart-scatter-bold.svg?v=4f5d17634892313bf14050371b629b6a05f6932c9d68ad53fc6655126e8003b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
