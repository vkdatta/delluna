export const name="car_fan_mid_right-fill";
export const id="dl_b33113f5b93a63c84c86";
export const url=new URL("../icons/car_fan_mid_right-fill.svg?v=a2d79ba493b82ac87a790b9b271c25bc9485c1626fb23f28ef49666378c85419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
