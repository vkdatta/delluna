export const name="transit_ticket";
export const id="dl_046655265e4fe8fc141f";
export const url=new URL("../icons/transit_ticket.svg?v=0efa7646730561dded281f8fe3979c6c086e658e037695781413e87af0d1b3d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
