export const name="area_chart";
export const id="dl_bbec730508a745548def";
export const url=new URL("../icons/A/area_chart.svg?v=31ecc2b4ffd1967f3def4ba9dc1fa1d73ed4fb1f8465b11db2046c1b13155385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
