export const name="flight_land-fill";
export const id="dl_56bf3a46099c7c160179";
export const url=new URL("../icons/flight_land-fill.svg?v=10edd795a01628a1c37bb029c6bc46b72bbe83a9149af047bdb584b5b38d9754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
