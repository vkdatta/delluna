export const name="airline_seat_legroom_normal-fill";
export const id="dl_a36d95dff6c0e458066d";
export const url=new URL("../icons/airline_seat_legroom_normal-fill.svg?v=cc2da9583dee2c4e30b26423999748195c04ec38f4a452af9b6066b82101324e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
