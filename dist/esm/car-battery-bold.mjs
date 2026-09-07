export const name="car-battery-bold";
export const id="dl_3c6fee3d6e11445bb382";
export const url=new URL("../icons/car-battery-bold.svg?v=e06cf338e08d2d06a6cb843a29ee1f144eaafdb6f92d311a59f9b92b9e1ecb3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
