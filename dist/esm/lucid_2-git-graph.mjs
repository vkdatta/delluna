export const name="lucid_2-git-graph";
export const id="dl_2f32190e59644563966b";
export const url=new URL("../icons/lucid_2-git-graph.svg?v=cfb18c64f6920809bdfacc035d68bcd18da32c68b07053568a54465ecf44d1cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
