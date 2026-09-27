export const name="grid_3x3-fill";
export const id="dl_f4df2737c6f7207a1254";
export const url=new URL("../icons/grid_3x3-fill.svg?v=1d392dc2e61bb6f0dba2d6ba35cdb0093baa043fee9c79387d727d2f553b0c0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
