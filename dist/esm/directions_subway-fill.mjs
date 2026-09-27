export const name="directions_subway-fill";
export const id="dl_e054ab23720353578764";
export const url=new URL("../icons/directions_subway-fill.svg?v=1659dfcfeb5413a5b84f2b6dcd93bc2d5134498591351776441d16afbf4438e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
