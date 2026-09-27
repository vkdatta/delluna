export const name="android_wifi_4_bar_plus";
export const id="dl_e2c9d8b742de19dfa2f0";
export const url=new URL("../icons/android_wifi_4_bar_plus.svg?v=6400b9df432a088341cfecc5a8231726cace42929602efebf600c8478a6703c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
