export const name="airport_shuttle-fill";
export const id="dl_ae9b0379ca1084eed36b";
export const url=new URL("../icons/airport_shuttle-fill.svg?v=2d563c256b982f44b8e9731bd0aa896c5623b80eb640d400970e7007d4950108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
