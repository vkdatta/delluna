export const name="graph_7-fill";
export const id="dl_9dedab8dc774463eaa41";
export const url=new URL("../icons/graph_7-fill.svg?v=8ffc499ee4d3ece47100bb15ce8499803d3da0640afdbdbd630356df2848de96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
