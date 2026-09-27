export const name="flight_takeoff";
export const id="dl_bcf7f2d69ab339266a82";
export const url=new URL("../icons/flight_takeoff.svg?v=7f510cec3cfa28e4c95ad9d9c1655d5b6d0fadbd42ab917acc38a3473e828b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
