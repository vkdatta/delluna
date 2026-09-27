export const name="rib_cage-fill";
export const id="dl_a00cbd92d6392e8907e1";
export const url=new URL("../icons/rib_cage-fill.svg?v=9171bffe65f56e14adddfae3368f1331ee9358398c9af66415f5756e7da4008a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
