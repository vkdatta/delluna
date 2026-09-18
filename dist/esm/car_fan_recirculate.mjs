export const name="car_fan_recirculate";
export const id="dl_1661acc79ca6478eba4d";
export const url=new URL("../icons/car_fan_recirculate.svg?v=9c32db667f9d490a4d66d21d11118bd732ce0d6f94deabd0958e070e958d157f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
