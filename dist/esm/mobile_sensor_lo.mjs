export const name="mobile_sensor_lo";
export const id="dl_985ff8f55dd5aebf317d";
export const url=new URL("../icons/mobile_sensor_lo.svg?v=f6fe98091aa48e49c93e71334e4e330970e0475fd72e6cb9856d5d6f73f0ac59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
