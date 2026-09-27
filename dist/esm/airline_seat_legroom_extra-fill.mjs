export const name="airline_seat_legroom_extra-fill";
export const id="dl_7b011da77aa36d627294";
export const url=new URL("../icons/airline_seat_legroom_extra-fill.svg?v=43f2365f065a4b46fe335beb153b7396d2fde03b5ce3bbaf79d81cbcec793211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
