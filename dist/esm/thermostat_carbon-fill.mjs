export const name="thermostat_carbon-fill";
export const id="dl_91130fdf4cf74e37bf3d";
export const url=new URL("../icons/T/thermostat_carbon-fill.svg?v=ca50f58eaa2c96cd814c40c0528c30c34d28888f48e5040f0c62b7dc32859d37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
