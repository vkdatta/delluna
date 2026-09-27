export const name="flight_takeoff";
export const id="dl_5e5fa58b6ddfca1c4089";
export const url=new URL("../icons/flight_takeoff.svg?v=78829468d31e22e4226607a5e3fa354da0151ad1cf48dd2b486345006ab51f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
