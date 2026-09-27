export const name="nest_thermostat_e_eu";
export const id="dl_2bb4c4a6c954be591dbd";
export const url=new URL("../icons/nest_thermostat_e_eu.svg?v=113289b438e0717d36ce9bd64d9e17404e2451fd7e6c4aca6fc3573b7d81feb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
