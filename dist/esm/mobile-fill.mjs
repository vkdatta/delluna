export const name="mobile-fill";
export const id="dl_2d064b1a3bd34b679c28";
export const url=new URL("../icons/mobile-fill.svg?v=4c3839ddc029be3402171ed73137ee0572be8497e40b25984046913a3cb2ac1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
