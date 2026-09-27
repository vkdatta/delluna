export const name="seat_vent_right-fill";
export const id="dl_7989808e17508ddf19c2";
export const url=new URL("../icons/seat_vent_right-fill.svg?v=1b44d321bf986b76e8efd029a5c97c7b375ef6bcdd4411981b9d31b7d55c8128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
