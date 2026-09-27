export const name="parachute-duotone";
export const id="dl_18efc751d8fe4076a7d4";
export const url=new URL("../icons/parachute-duotone.svg?v=33816c06878c03b512ffc7abf2b8240a3b0c82915ba37186446c67a50e16c1d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
