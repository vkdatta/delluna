export const name="car_fan_recirculate_2";
export const id="dl_c2a799fe7cf8b26bd968";
export const url=new URL("../icons/car_fan_recirculate_2.svg?v=cc6809e220a468e05ad5bca45024d86564a7b2f0c220985cb718a28964872392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
