export const name="battery_charging_60-fill";
export const id="dl_4de2c2afa2cb155b38f2";
export const url=new URL("../icons/battery_charging_60-fill.svg?v=a87a3dc75cba8696f640b39d03d4331703dcb736075a20e3f70e9bfb11986850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
