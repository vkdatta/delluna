export const name="power_off";
export const id="dl_25590999b0ba6011642f";
export const url=new URL("../icons/power_off.svg?v=843e2c25ffea9d7c08eb91fcdadd58568cdbddbdd1b276e1a477bd7a55bd958e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
