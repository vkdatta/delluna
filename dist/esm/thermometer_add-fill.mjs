export const name="thermometer_add-fill";
export const id="dl_9d196ddbe6ab4389e92a";
export const url=new URL("../icons/thermometer_add-fill.svg?v=91cf97b5f6d40826a68d3a9c75207a0b6ba170bc3a6a7b4fa11bbf91d3f5ba57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
