export const name="chart-donut-duotone";
export const id="dl_03f34a473c1f4238959a";
export const url=new URL("../icons/chart-donut-duotone.svg?v=6196d3a2bcf8f41be84f813ec8acc60eef16ba4c49a61c8ddc87d3acf8066de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
