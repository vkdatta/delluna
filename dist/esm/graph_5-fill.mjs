export const name="graph_5-fill";
export const id="dl_b90d3fc6cb174707abb3";
export const url=new URL("../icons/graph_5-fill.svg?v=8433e201c337520bde24ca7b622c7a7d87605df5b10287ab326f475c78401fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
