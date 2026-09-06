export const name="lucid_3-receipt-pound-sterling";
export const id="dl_4257331f55a34380ab2f";
export const url=new URL("../icons/lucid_3-receipt-pound-sterling.svg?v=fdeda2dc9bc021e5d39528c45464ead870b915656454f13b13feb1fd27009c1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
