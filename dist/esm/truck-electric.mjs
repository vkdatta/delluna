export const name="truck-electric";
export const id="dl_384b85e546d4412699f8";
export const url=new URL("../icons/truck-electric.svg?v=1b8cee4a28949ef496485fdb3148793cad2c7a778f1860352a81eaadb5970d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
