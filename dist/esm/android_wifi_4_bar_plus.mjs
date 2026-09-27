export const name="android_wifi_4_bar_plus";
export const id="dl_f893c35a5d5b791a2536";
export const url=new URL("../icons/android_wifi_4_bar_plus.svg?v=6ea28085f5932fbffab186554a978466f05ab58d7620d5b4ccc64b408e1535cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
