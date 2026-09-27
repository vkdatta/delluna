export const name="battery_horiz_075-fill";
export const id="dl_517746d95c1e8b41932a";
export const url=new URL("../icons/battery_horiz_075-fill.svg?v=85371c1ae9aff4699c6c371272c1e9fa475c8a64bdc2cdf66be6d9266f3bb43c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
