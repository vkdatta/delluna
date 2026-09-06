export const name="lucid_3-receipt-turkish-lira";
export const id="dl_722d9edd1c184ee2acc0";
export const url=new URL("../icons/lucid_3-receipt-turkish-lira.svg?v=b298efca19eca7bf12545a6b64ed95808acba96f37c8a0ae5831e4e3142c58b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
