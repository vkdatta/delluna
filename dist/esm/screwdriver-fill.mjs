export const name="screwdriver-fill";
export const id="dl_ba9658ef7abbfa28f19a";
export const url=new URL("../icons/screwdriver-fill.svg?v=c15d169acf22046088d4be29d23da10f6553e90903d25555657b77c2076836e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
