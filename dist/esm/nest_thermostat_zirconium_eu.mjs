export const name="nest_thermostat_zirconium_eu";
export const id="dl_818868bdc3cabb4b80bc";
export const url=new URL("../icons/nest_thermostat_zirconium_eu.svg?v=2c06bbe775d41ceeef444fe4fb8d26eda550c47042057ffb8299653e3ebe3d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
