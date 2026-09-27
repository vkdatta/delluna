export const name="android_wifi_3_bar";
export const id="dl_430028ff340a2f6618d5";
export const url=new URL("../icons/android_wifi_3_bar.svg?v=24a51786a46e08ede0ee451a1fcc32f5b3c705fcf027760fac89d85e39150d74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
