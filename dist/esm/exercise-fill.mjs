export const name="exercise-fill";
export const id="dl_fcfd1e77c4039f92a537";
export const url=new URL("../icons/exercise-fill.svg?v=33d0ed4e4d557347581344f9ec03f639573e3925ac1c3f5f19025a3afb35bca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
