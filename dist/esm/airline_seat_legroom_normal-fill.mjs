export const name="airline_seat_legroom_normal-fill";
export const id="dl_d2768ef1e0ae0fe506d4";
export const url=new URL("../icons/airline_seat_legroom_normal-fill.svg?v=d8094b79a1c12ea366ad3179b6aeca96fab70e9fbdeb008c7d1233f39094903a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
