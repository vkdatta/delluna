export const name="address-book-bold";
export const id="dl_824c0073a7cc4cb28a7a";
export const url=new URL("../icons/address-book-bold.svg?v=33cc96a8b2fe170f462ba65800de0f4157916b51ec1263629659f411360c4410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
