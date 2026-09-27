export const name="gas_meter-fill";
export const id="dl_bfdbc30b142f9ff57b24";
export const url=new URL("../icons/gas_meter-fill.svg?v=c6fea349dae06dad1be803115f4fe09bc298ab2bb53b0b5702377c395796e389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
