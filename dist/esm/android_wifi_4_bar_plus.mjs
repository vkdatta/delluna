export const name="android_wifi_4_bar_plus";
export const id="dl_c9fc1a6f85ad4fde86b3";
export const url=new URL("../icons/A/android_wifi_4_bar_plus.svg?v=1b2d2c69e1003d31ff7665e528d2a34cf5b5676ea403a860845b547b766a8765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
