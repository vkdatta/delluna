export const name="lucid_3-receipt-pound-sterling";
export const id="dl_4257331f55a34380ab2f";
export const url=new URL("../icons/lucid_3-receipt-pound-sterling.svg?v=83a9b7af17fb6fe2e673ba316d095da1243a7e8347656b9e8bb283aafd91a872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
