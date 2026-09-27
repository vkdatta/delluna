export const name="battery_android_plus";
export const id="dl_3d9f82b7accc357c74a2";
export const url=new URL("../icons/battery_android_plus.svg?v=8eb45f8b98fd367e36f93a18b13c4ad7dbd05683ac1ebe8b002dbc90d464225f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
