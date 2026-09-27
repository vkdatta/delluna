export const name="android_wifi_4_bar_lock-fill";
export const id="dl_3a4fb1bd83fbfe48d2cc";
export const url=new URL("../icons/android_wifi_4_bar_lock-fill.svg?v=bbe64cfb836a378a1b225420d3120b18834f7bc74434226ae65348976a616b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
