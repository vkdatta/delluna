export const name="electric_meter";
export const id="dl_01446bd207070a8b12c1";
export const url=new URL("../icons/electric_meter.svg?v=578e8d3db36022a0f06438fa7cad5c766ad49d492c028c174a58002f4804ffb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
