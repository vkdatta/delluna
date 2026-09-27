export const name="airline_seat_individual_suite";
export const id="dl_f9483bc508d5af1eee88";
export const url=new URL("../icons/airline_seat_individual_suite.svg?v=2a6ca119dc4b5965a9c171f14e852acf2676304d0909d218a1ca6deb560956ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
