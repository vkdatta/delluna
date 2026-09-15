export const name="directions_bus-fill";
export const id="dl_02166980da894e6abb2a";
export const url=new URL("../icons/D/directions_bus-fill.svg?v=bbc9d2319dc14279491ab08ceb6f1422f727253ea73fe785cfa664149d995950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
