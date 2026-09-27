export const name="home_iot_device";
export const id="dl_3e3968a4dfd1da1c6216";
export const url=new URL("../icons/home_iot_device.svg?v=1e90d75147936cf051af5f8feb11120377516540e9e500e153ff894f534c571b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
