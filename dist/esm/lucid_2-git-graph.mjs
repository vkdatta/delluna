export const name="lucid_2-git-graph";
export const id="dl_2f32190e59644563966b";
export const url=new URL("../icons/lucid_2-git-graph.svg?v=78a509a86ee6624ab61e5c39eb516544ebbd34a2c245c0fc7bc91415675b31ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
