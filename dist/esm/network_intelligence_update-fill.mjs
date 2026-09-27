export const name="network_intelligence_update-fill";
export const id="dl_6db4388ec832d10f4e7d";
export const url=new URL("../icons/network_intelligence_update-fill.svg?v=32d6e0e6bc5cede247cd00e09232bea485302108ac51d75367663de35d0322de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
