export const name="satellite_alt-fill";
export const id="dl_623d015b42001679b63c";
export const url=new URL("../icons/satellite_alt-fill.svg?v=74e8e17410f88bdccbc0359a759ea7dd26e39d39858152aaac5a991db04671eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
