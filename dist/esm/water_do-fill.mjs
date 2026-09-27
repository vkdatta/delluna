export const name="water_do-fill";
export const id="dl_469cc5c8ff00201794ad";
export const url=new URL("../icons/water_do-fill.svg?v=8154376974559490c5eb81bc2a90b5e856c53876f1332b8762bf2207a13976be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
