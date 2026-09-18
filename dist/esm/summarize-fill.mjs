export const name="summarize-fill";
export const id="dl_b7d7b37d35e44de581a1";
export const url=new URL("../icons/S/summarize-fill.svg?v=fa9a5c656ceaaa40015a3882314ef732144bf74df7ade703d0c1c0dc1b6e5730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
