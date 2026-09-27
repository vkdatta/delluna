export const name="car_defrost_mid_right-fill";
export const id="dl_2118eb888406bef4bb1d";
export const url=new URL("../icons/car_defrost_mid_right-fill.svg?v=b390bdd939114a9c00b34d17acb2428b31f4d18675a7a7a913c29980fc3a4426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
