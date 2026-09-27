export const name="airline_seat_flat";
export const id="dl_2f3c582424d8725b4bf1";
export const url=new URL("../icons/airline_seat_flat.svg?v=39cd953ba1bff8420cb5f44f17ed1d0667aa920538617e9df7341ec8cd7c380e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
