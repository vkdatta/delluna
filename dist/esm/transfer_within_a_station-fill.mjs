export const name="transfer_within_a_station-fill";
export const id="dl_b76dc0b8ebea4002ad3e";
export const url=new URL("../icons/T/transfer_within_a_station-fill.svg?v=092410ac1dfc4ed6050911bc3a39e0b887ef040b5e521868018f5f9edb99c9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
