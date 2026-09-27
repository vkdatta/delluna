export const name="water-fill";
export const id="dl_f633ac144ae46ee05277";
export const url=new URL("../icons/water-fill.svg?v=9a09b5f5c1b9b8bf9ef83ee88c498634fc956d8ce44e36be885eb436ba753079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
