export const name="energy_program_saving-fill";
export const id="dl_fcb3a2809e51efdfedc0";
export const url=new URL("../icons/energy_program_saving-fill.svg?v=aadc5bc51d1db7ece28523516faccb782ff8f62fa8b2f4b8c2204489423cee2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
