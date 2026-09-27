export const name="battery_charging_full-fill";
export const id="dl_06137464ac4d7dbb230c";
export const url=new URL("../icons/battery_charging_full-fill.svg?v=063e32fe482984d5aa8dceefd5e3ae50b184ec9c3ec2efc7fdb211d8e6fb5f8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
