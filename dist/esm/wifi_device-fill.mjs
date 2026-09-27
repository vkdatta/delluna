export const name="wifi_device-fill";
export const id="dl_0be36b15f63fa5c423ec";
export const url=new URL("../icons/wifi_device-fill.svg?v=701a2cd39cde0e76f9d1ed0ad6a62cccb52539442133ce32e27e8bb8aea0a39c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
