export const name="gps-fill";
export const id="dl_b67a078d1a59432c9a7d";
export const url=new URL("../icons/gps-fill.svg?v=50f424ea87eb8d9f5bf033319620d5eddb2771c3b5df6c9b8422f09def8d9bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
