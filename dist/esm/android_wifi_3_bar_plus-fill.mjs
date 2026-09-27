export const name="android_wifi_3_bar_plus-fill";
export const id="dl_1f9701d24ce982e23313";
export const url=new URL("../icons/android_wifi_3_bar_plus-fill.svg?v=925f93369166459a23fcb7dce6e404ee05fb6ceb29acc4248706b08fa9a69bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
