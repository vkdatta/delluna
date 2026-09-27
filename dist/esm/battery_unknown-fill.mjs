export const name="battery_unknown-fill";
export const id="dl_f3fa4c23907bd90d8714";
export const url=new URL("../icons/battery_unknown-fill.svg?v=742baefbb0b553d5cb7e3e5f776825a298e7aedc2e87ca40e088b019cc8affb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
