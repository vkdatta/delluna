export const name="sports_cricket-fill";
export const id="dl_fda343ed29bf45dea697";
export const url=new URL("../icons/sports_cricket-fill.svg?v=59b4d15297e6daf519387a2d8fba9c3b475724b130aace84965ca169129e8fd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
