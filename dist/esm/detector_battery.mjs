export const name="detector_battery";
export const id="dl_6e499acf0242b957cb54";
export const url=new URL("../icons/detector_battery.svg?v=4d00d24e24d22494245ea486776909d1b6e9ac6c524d04bf096bbc891f3ff68a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
