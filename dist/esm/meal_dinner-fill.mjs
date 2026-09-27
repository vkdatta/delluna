export const name="meal_dinner-fill";
export const id="dl_d00d5390a3a2e5b1716d";
export const url=new URL("../icons/meal_dinner-fill.svg?v=41e10511de8dc4516ce84abe68f92e5d1c3a943793ea3e085d44c1b61f4abe0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
