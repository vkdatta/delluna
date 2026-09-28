export const name="home_iot_device";
export const id="dl_ec9cc5c892753fea3a34";
export const url=new URL("../icons/home_iot_device.svg?v=2f03ab39e4fa580c5848a95324bc3a5fe51b0f0d28a60e1e3930c658f0392f98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
