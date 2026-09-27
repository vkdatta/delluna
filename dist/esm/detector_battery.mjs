export const name="detector_battery";
export const id="dl_92e86fa87c687559f1c8";
export const url=new URL("../icons/detector_battery.svg?v=5684b30c63a3de01509f850fff45499cee74c7a601a095637794a520f7c2511e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
