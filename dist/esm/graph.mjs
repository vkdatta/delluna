export const name="graph";
export const id="dl_11ed3b4dfa9d4a80827c";
export const url=new URL("../icons/graph.svg?v=810dcb43eb89fbaf854dca9f289fa06c79c2a9174999d1a1a990f2a5738396d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
