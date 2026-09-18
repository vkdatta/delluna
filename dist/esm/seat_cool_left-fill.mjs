export const name="seat_cool_left-fill";
export const id="dl_bd8ae0f66774449cb048";
export const url=new URL("../icons/seat_cool_left-fill.svg?v=084b08bde1332e3e033935ca89337e3fba356d864b5e1d3a0be133f9e0865679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
