export const name="nest_thermostat_zirconium_eu-fill";
export const id="dl_0d97f772eee04e582884";
export const url=new URL("../icons/nest_thermostat_zirconium_eu-fill.svg?v=20138fbf1e3eafcb1e8f101efa13ae9a9b9dcf29dd4ba63ea177705e2f59b67f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
