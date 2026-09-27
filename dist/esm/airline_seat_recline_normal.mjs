export const name="airline_seat_recline_normal";
export const id="dl_8aa21b7b6caf1143315b";
export const url=new URL("../icons/airline_seat_recline_normal.svg?v=677d898cf6640e287255143833bbf2d4cff389b653061a924aa4d0e8327e5c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
