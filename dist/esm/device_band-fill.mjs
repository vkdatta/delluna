export const name="device_band-fill";
export const id="dl_ae8089eb44c64f71e2c0";
export const url=new URL("../icons/device_band-fill.svg?v=1e92f797d8f34766e190b8ccb8805cb0fb3112a939949f2e119fbc913fdb4922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
