export const name="process_chart-fill";
export const id="dl_7034b645acd446e3b65b";
export const url=new URL("../icons/process_chart-fill.svg?v=b7247091e2986c5228e5afb5f63fc5d47fbf0850c7d85ba5db29ab8a4dac0313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
