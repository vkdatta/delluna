export const name="android_wifi_3_bar";
export const id="dl_4ccc06fdb5455cc98e98";
export const url=new URL("../icons/android_wifi_3_bar.svg?v=817a07730559f4ba31752873853fffa1c8b78112f49cb415ea64fe39f15d473a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
