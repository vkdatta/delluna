export const name="gas_meter";
export const id="dl_4377ab0efd32431d81ba";
export const url=new URL("../icons/gas_meter.svg?v=762978c39b4a591183850f65b2cb2f77f03d5193e3a5463cbb8297bcb83f57c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
