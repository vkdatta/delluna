export const name="chart-pie-fill";
export const id="dl_56d3c7a27c994b44aad5";
export const url=new URL("../icons/chart-pie-fill.svg?v=a2ef497b97221b61633b430136b894f2748a76e19af6692d6c671859c4c6825f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
