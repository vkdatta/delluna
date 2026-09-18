export const name="graph_8";
export const id="dl_8ffedee945e44ba2b3e5";
export const url=new URL("../icons/G/graph_8.svg?v=6b698c12cd200786da15d316fdbf0b79f67ba5e48a31bd85c7501efb92d11f6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
