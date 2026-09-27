export const name="graph_8-fill";
export const id="dl_3692774d8bc4ccbd6871";
export const url=new URL("../icons/graph_8-fill.svg?v=a20092bc1cca959ae97ffce7b2501c221520cfa02d97e9b76713528dbf4a9054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
