export const name="tree-evergreen-bold";
export const id="dl_8541d041824997ea25c1";
export const url=new URL("../icons/tree-evergreen-bold.svg?v=08a67810681fc69e73eac65d3a3acd91e45406f0e6a5f0b80213271a1bcb53bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
