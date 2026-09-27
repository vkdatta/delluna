export const name="fan_indirect-fill";
export const id="dl_ad5bc6fc7a6397c2f296";
export const url=new URL("../icons/fan_indirect-fill.svg?v=f9c59f0619e2c28f5d36f41ba88de499fb110b9bc9c62d767a57ae2d827970fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
