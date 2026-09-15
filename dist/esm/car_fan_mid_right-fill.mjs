export const name="car_fan_mid_right-fill";
export const id="dl_ea716eed72ae4c519373";
export const url=new URL("../icons/C/car_fan_mid_right-fill.svg?v=94a53170d6929d7fb276aecce4eb6bce6de0a0d2916b7628d16acd002a6c2bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
