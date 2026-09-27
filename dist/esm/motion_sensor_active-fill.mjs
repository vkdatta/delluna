export const name="motion_sensor_active-fill";
export const id="dl_0db652c2c3615bcf7ece";
export const url=new URL("../icons/motion_sensor_active-fill.svg?v=2a0c8826c0c2ae80461fc1f7cc89eea2cabec28f351f9cb4a93416c3c1052d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
