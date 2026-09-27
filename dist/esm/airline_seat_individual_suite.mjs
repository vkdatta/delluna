export const name="airline_seat_individual_suite";
export const id="dl_14d84a14097b9b7a2c5d";
export const url=new URL("../icons/airline_seat_individual_suite.svg?v=79ed09479a0e4adb5d1017547dbe3cc376925460a69130c11d035e98a470e1e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
