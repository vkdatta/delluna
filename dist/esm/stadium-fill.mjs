export const name="stadium-fill";
export const id="dl_6db92a90b19d1862b3d3";
export const url=new URL("../icons/stadium-fill.svg?v=272c14dc51fe8fe72a6907ff65bc8dabe57a6f3c8ef8d6a27b7f026f6277d0a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
