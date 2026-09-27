export const name="airline_seat_flat_angled-fill";
export const id="dl_9194428bcb96c51595ed";
export const url=new URL("../icons/airline_seat_flat_angled-fill.svg?v=b585730df4a47cac7fc33b7ad603199826dd2a3539cb8151900ee741ab14e7a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
