export const name="mobile_sensor_lo-fill";
export const id="dl_a5d4a5329dde45be87f5";
export const url=new URL("../icons/M/mobile_sensor_lo-fill.svg?v=ca1b658d50779e6e480f531a496cb6a5bd568ab22906199889588d7824a156ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
