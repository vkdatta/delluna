export const name="android_wifi_3_bar_plus-fill";
export const id="dl_cca5a841aa460dec45cf";
export const url=new URL("../icons/android_wifi_3_bar_plus-fill.svg?v=0e2253d32424deb5bd3151661214fea8056f03fa1041670481dc1c3e952c5a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
