export const name="android_wifi_3_bar_lock-fill";
export const id="dl_f640be98cb4520c91bbf";
export const url=new URL("../icons/android_wifi_3_bar_lock-fill.svg?v=6a34bdfc90cf6d91a72cae4476387e65fff71c0d5c511a1ce2b3beb51e7485c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
