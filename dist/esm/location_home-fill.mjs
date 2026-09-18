export const name="location_home-fill";
export const id="dl_0c5ffd2646bd4fe98380";
export const url=new URL("../icons/location_home-fill.svg?v=a2316b3b3067ae15172468f57983a64b2531a31468c9bcd341c163470b9b94f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
