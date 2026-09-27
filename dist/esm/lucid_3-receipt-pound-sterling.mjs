export const name="lucid_3-receipt-pound-sterling";
export const id="dl_4257331f55a34380ab2f";
export const url=new URL("../icons/lucid_3-receipt-pound-sterling.svg?v=3041677120724855dd17937e6d7673b13ae5f42011fa71158b870b29c7a934be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
