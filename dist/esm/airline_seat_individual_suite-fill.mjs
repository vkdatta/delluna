export const name="airline_seat_individual_suite-fill";
export const id="dl_517d6389972c4ddcad37";
export const url=new URL("../icons/A/airline_seat_individual_suite-fill.svg?v=e01e44cf159e72ded458e7f200b67105ac6ae8bfbef7c4acd57885f5285dcca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
