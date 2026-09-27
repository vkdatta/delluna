export const name="car_fan_recirculate-fill";
export const id="dl_2da5b20e42fd369669d0";
export const url=new URL("../icons/car_fan_recirculate-fill.svg?v=3f4c9bdaabc23c74b1717252741298909034bc69e47dc899d863d6879783ec21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
