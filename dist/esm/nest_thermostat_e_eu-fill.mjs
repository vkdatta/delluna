export const name="nest_thermostat_e_eu-fill";
export const id="dl_67c7ab11c98a6768187b";
export const url=new URL("../icons/nest_thermostat_e_eu-fill.svg?v=0289ed0e265cfe54f845e93ac3a8cc7c750b38aa41d961a10ad41b85d1c3353b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
