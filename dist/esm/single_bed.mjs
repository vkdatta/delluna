export const name="single_bed";
export const id="dl_64912b29f6062ec5da59";
export const url=new URL("../icons/single_bed.svg?v=364dfad07f2aab013f59e3a0fe7eaf7b2401a794ccca7217322c3d673cdc219c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
