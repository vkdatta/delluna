export const name="chart-donut-light";
export const id="dl_966c086572a34837a08b";
export const url=new URL("../icons/chart-donut-light.svg?v=cca792ca75a6b73248519398e8bdc57674f4abf3f7b58083dc847e33644a1e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
