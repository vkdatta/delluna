export const name="mobile_sensor_hi-fill";
export const id="dl_db0579107fc5421191c9";
export const url=new URL("../icons/M/mobile_sensor_hi-fill.svg?v=e98e3f43656426d65c53b87f9d4dc62f74e373967e1ef511382766df7612f833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
