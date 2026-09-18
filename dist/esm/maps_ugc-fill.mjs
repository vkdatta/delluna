export const name="maps_ugc-fill";
export const id="dl_192bc52ba0904837864b";
export const url=new URL("../icons/maps_ugc-fill.svg?v=9187e40d8b913627cfbe4f9ac859ea3fec1ca815e50f6e1755d45bc8db7730bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
