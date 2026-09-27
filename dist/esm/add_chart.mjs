export const name="add_chart";
export const id="dl_c696bb85e3f37f49d24a";
export const url=new URL("../icons/add_chart.svg?v=19034ea4e2845d5ec45137704ecd009ff093b2fc9b28931df5c72ff6f2966c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
