export const name="energy_program_saving-fill";
export const id="dl_ea176cb35ec82a227c7d";
export const url=new URL("../icons/energy_program_saving-fill.svg?v=b79799791db3aff3b4344d521766da27dbf2343a3fe3bba0bf94c7c90a5f61ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
