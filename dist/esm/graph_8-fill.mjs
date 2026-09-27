export const name="graph_8-fill";
export const id="dl_d1151f221478a2d50fd8";
export const url=new URL("../icons/graph_8-fill.svg?v=384961adfb4b772a9bb6105bf5577bcacc0c4f434791356d5b5082b606e136c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
