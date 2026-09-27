export const name="airline_seat_individual_suite";
export const id="dl_8fa2a7ea50eca6a42397";
export const url=new URL("../icons/airline_seat_individual_suite.svg?v=f757524b25ff6ea8db3b6608860218b657de755e81075117d40eb74d78ed7c7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
