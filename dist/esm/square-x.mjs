export const name="square-x";
export const id="dl_548abb2ab44445979260";
export const url=new URL("../icons/square-x.svg?v=2a5ff10549f03aae5eac33e74604d3d661db33985f46eb4a7aa69e2a6650e4ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
