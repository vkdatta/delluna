export const name="nest_cam_floodlight";
export const id="dl_0f208b9387d1505c6308";
export const url=new URL("../icons/nest_cam_floodlight.svg?v=70e7e529d30e4181b7c75388e952263fb57461a378cf520e4e19767d63adc109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
