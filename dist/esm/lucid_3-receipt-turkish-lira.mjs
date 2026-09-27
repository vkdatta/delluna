export const name="lucid_3-receipt-turkish-lira";
export const id="dl_722d9edd1c184ee2acc0";
export const url=new URL("../icons/lucid_3-receipt-turkish-lira.svg?v=3a53368033bdc32f1e589acbd4665094f4a9d21034460c504a62e7ed4204724d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
