export const name="car_fan_recirculate-fill";
export const id="dl_9cc53f5620ec49c097ec";
export const url=new URL("../icons/car_fan_recirculate-fill.svg?v=e9ab1afffb82b0569983758dc0e427c657c0b573532f2e0d0e1f30b5f3f1d88c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
