export const name="globe-simple-bold";
export const id="dl_9f39a833a5c44b4f83c9";
export const url=new URL("../icons/globe-simple-bold.svg?v=dac6f8fb4dcbd7301e4be3ad4793aa934f87566a6787ea9483b491fa2b3261f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
