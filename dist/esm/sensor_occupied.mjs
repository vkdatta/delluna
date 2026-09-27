export const name="sensor_occupied";
export const id="dl_e2787feafce391cce48f";
export const url=new URL("../icons/sensor_occupied.svg?v=15a228a710d9d4011ed70b91cf7e947d1548a13072dd1a55c0f45c7fb556dc91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
