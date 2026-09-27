export const name="home_repair_service-fill";
export const id="dl_a22d1dfce0646b5e75f0";
export const url=new URL("../icons/home_repair_service-fill.svg?v=8ff3cd591e56563e1af6e6f33b70cbd95363d59f35854dc3948ae3521b2bcdf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
