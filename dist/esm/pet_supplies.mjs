export const name="pet_supplies";
export const id="dl_31ba21edc254f813bda1";
export const url=new URL("../icons/pet_supplies.svg?v=76ace99db4dcf00ddcf06b92b4765f2205fef6b23761b723f4d0e138541f67ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
