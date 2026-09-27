export const name="nest_thermostat_e_eu";
export const id="dl_71faf35e0f04828c88ba";
export const url=new URL("../icons/nest_thermostat_e_eu.svg?v=1878b47375b2ec1c5d07e6898ea892a55b347cd35397966f9c315ccd7937eb6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
