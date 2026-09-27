export const name="chart-scatter";
export const id="dl_4756f0321a164df5b2f6";
export const url=new URL("../icons/chart-scatter.svg?v=aca498cd366cb726816bd0645205f04952b98425b4ff2fcfe4a2fa3e47bdd219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
