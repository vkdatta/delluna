export const name="android_cell_5_bar_alert";
export const id="dl_66f9d4fd57b59c67383d";
export const url=new URL("../icons/android_cell_5_bar_alert.svg?v=36e2e1367c25e80498cff0d2f712280b0fd432db2e0c13bb2ffe4e5f8eaed640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
