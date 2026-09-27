export const name="head_mounted_device";
export const id="dl_d39759e47f04058c030f";
export const url=new URL("../icons/head_mounted_device.svg?v=21113d5afc7af69d88d1b4ee21e843911732116fb684aa1597f06596521be738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
