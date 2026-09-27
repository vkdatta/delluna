export const name="car-duotone";
export const id="dl_ae228c306f7a4bc295e4";
export const url=new URL("../icons/car-duotone.svg?v=0f5b3558f1a019c696609373b211dcff726222bcd8aed84fe5e136eee43bcf05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
