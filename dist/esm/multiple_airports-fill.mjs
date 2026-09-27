export const name="multiple_airports-fill";
export const id="dl_01a1f4c8785f44f03b24";
export const url=new URL("../icons/multiple_airports-fill.svg?v=87ccf2447150831863f8c2be8cf568bcedcdf12bffe45cf94dddfd5c8f82f81c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
