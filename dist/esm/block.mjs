export const name="block";
export const id="dl_e775cdcd29031227917d";
export const url=new URL("../icons/block.svg?v=efbb8726078c968aadf8381038e115732c155c2102a67323a7025e81f7d93ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
