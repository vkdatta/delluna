export const name="car_mirror_heat";
export const id="dl_3533bcaaeb6eb18b0dbf";
export const url=new URL("../icons/car_mirror_heat.svg?v=3018f896e8ae845d0309089f8154c3cedacdf6394230697b635834bd47d66db0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
