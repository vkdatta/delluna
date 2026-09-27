export const name="chart-bar-fill";
export const id="dl_418add67ae034c309424";
export const url=new URL("../icons/chart-bar-fill.svg?v=30b8172227a9b2d79fedf35371575711c30d8015433a1ab2cefdf10124a5f1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
