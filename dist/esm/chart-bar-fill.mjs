export const name="chart-bar-fill";
export const id="dl_418add67ae034c309424";
export const url=new URL("../icons/chart-bar-fill.svg?v=a417cc075c304374043e7d47f7622606b15f14e4c65663fd7a8a9898d768362a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
