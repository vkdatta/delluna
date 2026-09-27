export const name="airline_seat_individual_suite";
export const id="dl_c76c4212a40f43f67a1c";
export const url=new URL("../icons/airline_seat_individual_suite.svg?v=ec45a5f86810cde22f4cc88ec30e43304b5c4f338b079272b758011c4227d042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
