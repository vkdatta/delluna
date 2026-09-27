export const name="mobile_sensor_lo";
export const id="dl_423fd83cfe7084b46d91";
export const url=new URL("../icons/mobile_sensor_lo.svg?v=25fb5e4d01c7bdc2aac05de4d2d8f292a18aedf80a02a88c2edf305d5ba4ec36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
