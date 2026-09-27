export const name="mobile_sensor_hi-fill";
export const id="dl_651c02ddb04f08b8b51e";
export const url=new URL("../icons/mobile_sensor_hi-fill.svg?v=e98e3f43656426d65c53b87f9d4dc62f74e373967e1ef511382766df7612f833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
