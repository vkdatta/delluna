export const name="nest_thermostat_e_eu-fill";
export const id="dl_ca9ccece7a8c61b9ffe4";
export const url=new URL("../icons/nest_thermostat_e_eu-fill.svg?v=5c376ac9a317cac34dead8b17f76279432fd74b63deb17c65105a63d16b29c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
