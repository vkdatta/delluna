export const name="seat_vent_left-fill";
export const id="dl_3c19c643872c48398734";
export const url=new URL("../icons/seat_vent_left-fill.svg?v=597e045d8c1bd62aba48a873a248b28dfcc46486bc9b492e63ec562305b61f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
