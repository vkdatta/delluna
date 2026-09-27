export const name="android_wifi_4_bar_lock-fill";
export const id="dl_30aec65d32852686c1fb";
export const url=new URL("../icons/android_wifi_4_bar_lock-fill.svg?v=94a5f7f6c8a1c6fe4d66cd3848f0f720b236d6d87de894d70ac3050fd2fcbcc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
