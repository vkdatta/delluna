export const name="directions_car-fill";
export const id="dl_c1a1e9adc2386c060386";
export const url=new URL("../icons/directions_car-fill.svg?v=aae2b7b3b88e2507833ebbde0a355e7e722fa83619d9e0466e310152a8afce0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
