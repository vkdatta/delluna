export const name="snowflake-light";
export const id="dl_f933e5dc12ad46269532";
export const url=new URL("../icons/S/snowflake-light.svg?v=7a1ee4dd479f43b69a65bc2ca02626d4d0f7312e65566c5266ff64c3014da490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
