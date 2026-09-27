export const name="water_heater";
export const id="dl_87252ddec3e9e9939176";
export const url=new URL("../icons/water_heater.svg?v=401ccce2e9d84a7a2d90adb8b728c214ad66e7a8140912f9b84b399d5657afd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
