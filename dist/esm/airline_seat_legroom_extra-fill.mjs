export const name="airline_seat_legroom_extra-fill";
export const id="dl_1e81dda4ae45e842f3f0";
export const url=new URL("../icons/airline_seat_legroom_extra-fill.svg?v=72078f2efc26ef8dba7873dabf4866e2dbba5d494dd45418024791d99e3747e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
