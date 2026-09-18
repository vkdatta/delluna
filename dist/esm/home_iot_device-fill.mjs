export const name="home_iot_device-fill";
export const id="dl_d55a1b059d30456cb57b";
export const url=new URL("../icons/home_iot_device-fill.svg?v=e26744ff8cb6a4cc5cc33e502bb705cdc5b63a674d09c55fbc5c0d01a6654c84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
