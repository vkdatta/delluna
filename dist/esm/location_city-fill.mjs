export const name="location_city-fill";
export const id="dl_b3edf985e53f1b364bae";
export const url=new URL("../icons/location_city-fill.svg?v=ec587bac75420af4656fe3d75980fa28e169c5b70f7d90ed25c95f0fa7f6a664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
