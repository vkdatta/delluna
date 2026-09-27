export const name="nest_thermostat_e_eu-fill";
export const id="dl_9649ab255b849d5c285a";
export const url=new URL("../icons/nest_thermostat_e_eu-fill.svg?v=6c21276c680ba7243c79e16ad55ef9a5871806b41c77c8bdcc0e65d70ed3c031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
