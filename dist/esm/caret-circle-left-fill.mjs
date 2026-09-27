export const name="caret-circle-left-fill";
export const id="dl_711b641d4f8c4ae9ab8c";
export const url=new URL("../icons/caret-circle-left-fill.svg?v=8545d3d20be82e1b333471db990988a10451240f165f1d57af072f1579803088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
