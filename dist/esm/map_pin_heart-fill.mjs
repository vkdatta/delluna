export const name="map_pin_heart-fill";
export const id="dl_645bdfceb43423d91d97";
export const url=new URL("../icons/map_pin_heart-fill.svg?v=08fc3bf6ee90d2c56d5a61c1c151fadeede2c325900af4c77691fc8c368b0aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
