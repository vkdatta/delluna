export const name="transfer_within_a_station-fill";
export const id="dl_63dd7aa8c369fa7f9977";
export const url=new URL("../icons/transfer_within_a_station-fill.svg?v=092410ac1dfc4ed6050911bc3a39e0b887ef040b5e521868018f5f9edb99c9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
