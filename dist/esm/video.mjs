export const name="video";
export const id="dl_5944b522f0b848b18b94";
export const url=new URL("../icons/video.svg?v=4aace236b1c2708da99c6f5346586a154394ae483e9a008778fdc810ae00d94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
