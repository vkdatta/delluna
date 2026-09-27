export const name="home_iot_device-fill";
export const id="dl_a8ec0d31dfb6042d8f14";
export const url=new URL("../icons/home_iot_device-fill.svg?v=14af509b940ab8f139db12f52a81256d7a637707a5361a19b6ba1828828da49b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
