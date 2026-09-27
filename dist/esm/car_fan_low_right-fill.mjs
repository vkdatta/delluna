export const name="car_fan_low_right-fill";
export const id="dl_0e55e20cc6ba38359d8b";
export const url=new URL("../icons/car_fan_low_right-fill.svg?v=eda6cdbb123f01c1dbbbbdc16d6cc6b76b7a1f283aeaa6923b5821a3d5986863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
