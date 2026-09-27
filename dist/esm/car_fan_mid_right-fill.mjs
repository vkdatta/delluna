export const name="car_fan_mid_right-fill";
export const id="dl_3b4c5472f09a8664d7c2";
export const url=new URL("../icons/car_fan_mid_right-fill.svg?v=18dc77f751b407bd4642d56b5ceba2426a0908acaa8bd09fae8006019f534fe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
