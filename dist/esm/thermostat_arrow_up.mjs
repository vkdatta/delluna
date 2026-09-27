export const name="thermostat_arrow_up";
export const id="dl_04dc80daf2abeb5ffabc";
export const url=new URL("../icons/thermostat_arrow_up.svg?v=3437f0ee5611e36b56bb356d2745e04225ab71e42ea086f50ee4382ae7ea8916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
