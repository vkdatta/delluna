export const name="mobile_sensor_hi";
export const id="dl_20c3cb18049c2030b954";
export const url=new URL("../icons/mobile_sensor_hi.svg?v=fa57fa45f5ab222d3a587473b55fddc5c279423f2ff56b5aadd8b421e21f93ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
