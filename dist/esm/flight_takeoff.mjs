export const name="flight_takeoff";
export const id="dl_6bb342b2cd34040d516f";
export const url=new URL("../icons/flight_takeoff.svg?v=318dd552b529396553d93c9fdad822f921f13bfac5bb803e539adfd7cb72345e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
