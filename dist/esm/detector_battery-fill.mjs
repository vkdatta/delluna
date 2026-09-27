export const name="detector_battery-fill";
export const id="dl_e765993b16b2c9fda4b3";
export const url=new URL("../icons/detector_battery-fill.svg?v=23afed6c3cbc6e6e0d69b95aed9d786343293b755c4781976d55a5f8e1847a9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
