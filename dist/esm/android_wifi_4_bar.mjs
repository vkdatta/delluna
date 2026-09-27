export const name="android_wifi_4_bar";
export const id="dl_718b8629f77e1cdde923";
export const url=new URL("../icons/android_wifi_4_bar.svg?v=bab3e2260572f9cc0339cd4499ae6467b85d26a2c36af4e709a0056b7bf3063b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
