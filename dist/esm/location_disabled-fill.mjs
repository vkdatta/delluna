export const name="location_disabled-fill";
export const id="dl_2358705054f4387d1f09";
export const url=new URL("../icons/location_disabled-fill.svg?v=87cb88eddba3460ff832dbe2ce3755062297ed4aad9e9940062d55393b037f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
