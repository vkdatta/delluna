export const name="chart-bar-bold";
export const id="dl_0ba420a69be944729a00";
export const url=new URL("../icons/chart-bar-bold.svg?v=f400dea62460d29b9fa5e44af69ea457388fc238e35bb6edd8f59a64908fac80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
