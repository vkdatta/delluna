export const name="energy_program_saving-fill";
export const id="dl_fe4e668906e7839b1595";
export const url=new URL("../icons/energy_program_saving-fill.svg?v=c0e57376e083147347fb1aec641de188e742f052d1788a7a2224e545c9b07e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
