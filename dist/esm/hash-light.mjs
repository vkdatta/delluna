export const name="hash-light";
export const id="dl_a1252a3e30624fdcb81c";
export const url=new URL("../icons/hash-light.svg?v=bc71450e1481940f4eeebc9d90b67c65ae7e0444805914c702a01d3bb06f3621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
