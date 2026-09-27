export const name="currency-kzt-light";
export const id="dl_22663aa979a74a1281f4";
export const url=new URL("../icons/currency-kzt-light.svg?v=78714335ce9fbc46e8c1759ba4917a2ba5038dc7813ad83559608e075ec3c28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
