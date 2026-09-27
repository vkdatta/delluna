export const name="android_wifi_4_bar_plus";
export const id="dl_08058dacc2284dffdd0c";
export const url=new URL("../icons/android_wifi_4_bar_plus.svg?v=ea19a83efe30f2958519820e70bee088a9441248376cee6dad5d4a2558f01b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
