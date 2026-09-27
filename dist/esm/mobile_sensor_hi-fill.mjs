export const name="mobile_sensor_hi-fill";
export const id="dl_f9f8ee6849b03493b3e5";
export const url=new URL("../icons/mobile_sensor_hi-fill.svg?v=e7cf1f5a293c4aa2318f3c3ba462bf00ea05a6210f5dad2bb24c6ce90e6a2535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
