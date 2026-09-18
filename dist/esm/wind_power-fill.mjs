export const name="wind_power-fill";
export const id="dl_5ace72aade7040df8d42";
export const url=new URL("../icons/W/wind_power-fill.svg?v=f55f1d4d3126c89f691edc274351ac6c6217052b3930895790523b7be1962675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
