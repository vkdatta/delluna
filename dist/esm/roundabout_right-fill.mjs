export const name="roundabout_right-fill";
export const id="dl_c7f633e5f9dd366af511";
export const url=new URL("../icons/roundabout_right-fill.svg?v=0191604f692e7074859f94f58afb769e2d5cf0c148d16efceeef4eff4174d055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
