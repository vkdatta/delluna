export const name="android_wifi_3_bar";
export const id="dl_c21eb93d0db46b96ac0e";
export const url=new URL("../icons/android_wifi_3_bar.svg?v=21d362ec747a6dea6dfb16a82858abff29513e0c1f323a156c411d281906ec0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
