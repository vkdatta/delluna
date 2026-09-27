export const name="perm_scan_wifi";
export const id="dl_cc621d3377bdc492d445";
export const url=new URL("../icons/perm_scan_wifi.svg?v=543591c2db8f2568399093cbbf9fa8fedbe7668f1bbecc78d4a4eb4b398d4d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
