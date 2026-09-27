export const name="sensor_door";
export const id="dl_a598de7cb4647764c404";
export const url=new URL("../icons/sensor_door.svg?v=5239d68d978e21b5c746e2c885628703c7f995eaf2438d750204b9f37f00ebb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
