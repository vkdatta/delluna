export const name="car_fan_mid_left-fill";
export const id="dl_929fed72e03879bb8d9e";
export const url=new URL("../icons/car_fan_mid_left-fill.svg?v=7d051c4e21fc76ad5b74af8c2ab7f264ccdd5a79587671420c3075ee4ea64807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
