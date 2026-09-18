export const name="graph_2";
export const id="dl_f5f0bc41fb9d4241b9c5";
export const url=new URL("../icons/graph_2.svg?v=43ac3f3e2c4b552471817e2db4e71ac59cb5eeccd8624f2ea93c8ef9a245e2b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
