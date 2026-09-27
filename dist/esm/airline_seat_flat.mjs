export const name="airline_seat_flat";
export const id="dl_2e48132cd9d2992d992a";
export const url=new URL("../icons/airline_seat_flat.svg?v=42ca2817780a6d5644349523f556702f70709a9ab1bb6c1035d1edfa1da40467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
