export const name="paw-print-light";
export const id="dl_302e7d7a76ca404f83f6";
export const url=new URL("../icons/paw-print-light.svg?v=d6078340669e9292f699fa7a9d9a460f7f64810a995426c8cf11794db52485a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
