export const name="wifi_notification-fill";
export const id="dl_a1cb6a6956a448e8982f";
export const url=new URL("../icons/W/wifi_notification-fill.svg?v=cd2119a19b4af8f398217dddf73404dd186fc50aa06d3a06365c38e31cb9a5a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
