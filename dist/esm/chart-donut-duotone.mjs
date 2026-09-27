export const name="chart-donut-duotone";
export const id="dl_03f34a473c1f4238959a";
export const url=new URL("../icons/chart-donut-duotone.svg?v=8ce7347b4c76bd134ff3bf31eda24f71be3ee421269f618295c0a28c3addbbca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
