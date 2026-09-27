export const name="database_off-fill";
export const id="dl_801d0ec5a85618a2ee8a";
export const url=new URL("../icons/database_off-fill.svg?v=50ed8c4195e6a01aa2d4c4bb710ab1e65f92eb98506ae8731db409e65b0d36ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
