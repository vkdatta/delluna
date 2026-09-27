export const name="chart-scatter";
export const id="dl_4756f0321a164df5b2f6";
export const url=new URL("../icons/chart-scatter.svg?v=21ea5e16d3d1b564ebb5f9b1b44bb554976c4274824253263d0f9fdc7d2571ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
