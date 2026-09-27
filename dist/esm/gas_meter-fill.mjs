export const name="gas_meter-fill";
export const id="dl_074b849c64b3f7ad46e4";
export const url=new URL("../icons/gas_meter-fill.svg?v=cb426fab63e2aec49e560c85bbc2d2bada4675b977bb6cfbe4a2bda27bbd3942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
