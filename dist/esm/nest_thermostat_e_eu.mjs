export const name="nest_thermostat_e_eu";
export const id="dl_e8c1f556d3724e9cb25d";
export const url=new URL("../icons/N/nest_thermostat_e_eu.svg?v=7b2b77bb17b14c47125e6890aea6a784940dd2b8c9a964a48ef3249cca77cdd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
