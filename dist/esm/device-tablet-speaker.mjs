export const name="device-tablet-speaker";
export const id="dl_4b5e78da52064728bdf4";
export const url=new URL("../icons/device-tablet-speaker.svg?v=3891cd1eb673a725db04cf7cd11566ad35ea7b5678ae006ada43bf212e5f023f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
