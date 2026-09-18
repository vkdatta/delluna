export const name="hotel_class";
export const id="dl_60fb7f22b92643759951";
export const url=new URL("../icons/H/hotel_class.svg?v=6194ed1f111297bf29a11d3bb638a7aea38418dfa2fa21423bd10f5cc992e444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
