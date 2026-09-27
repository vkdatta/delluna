export const name="car_fan_low_right-fill";
export const id="dl_3ed0110f75b56fd9e718";
export const url=new URL("../icons/car_fan_low_right-fill.svg?v=139b2e117934b58c75bc412edef87d65deaa6616ac737baa13c78a244ca6d572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
