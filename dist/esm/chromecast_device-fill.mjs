export const name="chromecast_device-fill";
export const id="dl_51ea38257007f96f78ff";
export const url=new URL("../icons/chromecast_device-fill.svg?v=fb395331c64ea6357e427dfd183f901546ebdc537bc9e8176092ef47520698a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
