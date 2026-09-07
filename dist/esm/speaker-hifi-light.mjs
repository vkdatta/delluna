export const name="speaker-hifi-light";
export const id="dl_a3d332b2a2c746f4b583";
export const url=new URL("../icons/S/speaker-hifi-light.svg?v=757655b4cc3d23607fa41fa6df6dd48ac4682e1743c31ba0a7511822dbf76604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
