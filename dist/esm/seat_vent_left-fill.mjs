export const name="seat_vent_left-fill";
export const id="dl_282a58af5c1f7f5bef2a";
export const url=new URL("../icons/seat_vent_left-fill.svg?v=7e3612b4922bfb4be18b89af150be51d92c6cf7945d9434ee18a6badf46a6d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
