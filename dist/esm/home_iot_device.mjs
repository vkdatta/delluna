export const name="home_iot_device";
export const id="dl_cf0f5af1ba261c4b38fb";
export const url=new URL("../icons/home_iot_device.svg?v=f96cf461326bbb11e754d0cb6ed84eb7741a5fe4cff7dae4d2f2b2027e947abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
