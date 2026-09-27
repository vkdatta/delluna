export const name="tram-fill";
export const id="dl_5fd8c1a8407cbf505591";
export const url=new URL("../icons/tram-fill.svg?v=836ba716e4100d963cda9817685c372b282c8cd66aa6e199456f71ee2e9a2caf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
