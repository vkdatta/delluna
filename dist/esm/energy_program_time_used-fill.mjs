export const name="energy_program_time_used-fill";
export const id="dl_5160e4ffe10f480f824a";
export const url=new URL("../icons/energy_program_time_used-fill.svg?v=ae052a8df4de2d1354ba795c90b9d2d055f34fc9cb3d2cbe626167e410830c7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
