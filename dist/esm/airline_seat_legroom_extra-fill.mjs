export const name="airline_seat_legroom_extra-fill";
export const id="dl_faf97e1b1e967776c00e";
export const url=new URL("../icons/airline_seat_legroom_extra-fill.svg?v=7651cedf52ef151269933ff7e7aba3d45c4bbd149bc8b01228eafb75559fdce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
