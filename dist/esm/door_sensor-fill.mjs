export const name="door_sensor-fill";
export const id="dl_579093760401c4ebac87";
export const url=new URL("../icons/door_sensor-fill.svg?v=dfc46e4c6dc3ae94256ddecf2fc7dce4bd1367c9da1116893b07ff3bb4a0ebf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
