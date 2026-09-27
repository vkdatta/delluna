export const name="lucid_2-hexagon";
export const id="dl_eeb955cfc7274f6ea417";
export const url=new URL("../icons/lucid_2-hexagon.svg?v=d285524d3a7d23e08ac8d9eef820a618b751c42878f14b769321d7550336e84c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
