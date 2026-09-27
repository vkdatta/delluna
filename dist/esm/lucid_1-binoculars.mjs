export const name="lucid_1-binoculars";
export const id="dl_2a53b2275004476cb924";
export const url=new URL("../icons/lucid_1-binoculars.svg?v=76d434cb5972303563771c7e7ca308a772c360d45df8c4d5250aa3ad9bf293e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
