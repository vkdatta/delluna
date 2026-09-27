export const name="satellite_alt-fill";
export const id="dl_7d69021c22a3e1c80812";
export const url=new URL("../icons/satellite_alt-fill.svg?v=0bfc032f215e95778c6a1a5e9dd088d98a55418507d87fb84f0910d2d4da770e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
