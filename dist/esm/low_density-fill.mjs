export const name="low_density-fill";
export const id="dl_57effb6b32d88f217544";
export const url=new URL("../icons/low_density-fill.svg?v=993a5ec390f39797bdf58d0a9a0623b98eea53d168fa380e1c8852b747774114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
