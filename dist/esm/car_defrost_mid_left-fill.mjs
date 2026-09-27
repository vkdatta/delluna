export const name="car_defrost_mid_left-fill";
export const id="dl_09c5e41c093cbb1cd609";
export const url=new URL("../icons/car_defrost_mid_left-fill.svg?v=51ca02b239cc4b524db72e15c35b0c2d7567a3d0e7ba34e6b02b487c6f668549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
