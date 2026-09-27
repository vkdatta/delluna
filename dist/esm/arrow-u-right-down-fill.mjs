export const name="arrow-u-right-down-fill";
export const id="dl_cf6198fd44e24d2fb944";
export const url=new URL("../icons/arrow-u-right-down-fill.svg?v=15a4ee61629eb2891da21e24fe8684ec3d3557dcd2407a71629ce1ecf9c17ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
