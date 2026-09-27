export const name="nest_thermostat_zirconium_eu";
export const id="dl_0960fe9e8f93f942c557";
export const url=new URL("../icons/nest_thermostat_zirconium_eu.svg?v=e5ca6804906c51eaa8ece86ab54d1072cdf4a85df51abeb65ebed8da9a616163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
