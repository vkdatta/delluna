export const name="thermostat_carbon";
export const id="dl_cb88fb4098d81cbbfde0";
export const url=new URL("../icons/thermostat_carbon.svg?v=cb83b9dc1135c97e49e541f77bcee2509e248c713af56f0072fc426416adc43f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
