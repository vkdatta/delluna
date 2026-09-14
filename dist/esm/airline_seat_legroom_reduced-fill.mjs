export const name="airline_seat_legroom_reduced-fill";
export const id="dl_e66e85ca075d4007af21";
export const url=new URL("../icons/A/airline_seat_legroom_reduced-fill.svg?v=14ec55eb623e40587499607e9d5a0360ac0331eb4a2e08bd811566fb32edd299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
