export const name="sensor_occupied-fill";
export const id="dl_9e9de1b527b13c19a212";
export const url=new URL("../icons/sensor_occupied-fill.svg?v=e7310874af72e22f18f658e051f2fff7b4c8fe9c0413d0fa4a4e8cf2d7658eef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
