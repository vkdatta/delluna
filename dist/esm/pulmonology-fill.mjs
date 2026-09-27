export const name="pulmonology-fill";
export const id="dl_a2a8c0eddf69466dd998";
export const url=new URL("../icons/pulmonology-fill.svg?v=18df26d3b6454fbb523a12f6a83fcd3767545a4f858c0b022eaee48df7cca7f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
