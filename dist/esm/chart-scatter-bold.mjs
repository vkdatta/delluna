export const name="chart-scatter-bold";
export const id="dl_1d521f5184824ba68e78";
export const url=new URL("../icons/chart-scatter-bold.svg?v=af382d332a5cb21810ea4fd576b1b9bbff8a7ce79206d8830f5b9a2819241df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
