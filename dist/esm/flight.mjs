export const name="flight";
export const id="dl_1e96e8cc391640ccbf89";
export const url=new URL("../icons/F/flight.svg?v=d1716a939021b65a09552e7cc51d9cf431d47679b13f888a837ec218c3065bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
