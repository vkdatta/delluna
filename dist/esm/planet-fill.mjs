export const name="planet-fill";
export const id="dl_cd404c55f1d250ab2658";
export const url=new URL("../icons/planet-fill.svg?v=de87dada22872b32225352bc59d44d74e173c672dcf0d9c51952a260bd563e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
