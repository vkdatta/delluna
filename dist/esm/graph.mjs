export const name="graph";
export const id="dl_11ed3b4dfa9d4a80827c";
export const url=new URL("../icons/graph.svg?v=48a6b3cabd3864528dd76d8b16ecada3d8e42c8bb790b724c7b7f065cb0902d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
