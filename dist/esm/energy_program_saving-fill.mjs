export const name="energy_program_saving-fill";
export const id="dl_e7455365af2115481c0e";
export const url=new URL("../icons/energy_program_saving-fill.svg?v=c934f66d9cd3744486c65bac97562bcf4bf924e1c873768dab6b844580750820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
