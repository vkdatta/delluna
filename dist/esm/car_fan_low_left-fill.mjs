export const name="car_fan_low_left-fill";
export const id="dl_6247ee8912791541bcc1";
export const url=new URL("../icons/car_fan_low_left-fill.svg?v=a4a1c762fad4138a2dcc822479449b30f1200ef0dbc18c7eacb2922d2e0b8b35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
