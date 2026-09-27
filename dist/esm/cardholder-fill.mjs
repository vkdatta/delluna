export const name="cardholder-fill";
export const id="dl_67afd256be36462485aa";
export const url=new URL("../icons/cardholder-fill.svg?v=7844af6690363ef5332248a4761d0c84c01efd5528c6398fa79649e5c8906cef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
