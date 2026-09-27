export const name="seat_vent_left-fill";
export const id="dl_18cb0c527fe5a213e0ce";
export const url=new URL("../icons/seat_vent_left-fill.svg?v=df907d8fc42b4078ad2b7ba6f896d19fa6e13bb2427a269ebaeb51cade8b7478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
