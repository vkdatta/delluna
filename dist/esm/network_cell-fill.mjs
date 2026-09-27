export const name="network_cell-fill";
export const id="dl_3274f0a6d5e4af39ee10";
export const url=new URL("../icons/network_cell-fill.svg?v=0c04f2449ac662cbb9d589ab1ac1aa83947c9d83d29131d9acd3b78ef374c2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
