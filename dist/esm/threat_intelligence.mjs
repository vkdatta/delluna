export const name="threat_intelligence";
export const id="dl_fcaecf007b40eecb4db1";
export const url=new URL("../icons/threat_intelligence.svg?v=4531cfbc764711b2ebbdcec7247b3c1888c7cfd55446ce471d98a02fe7b8ef41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
