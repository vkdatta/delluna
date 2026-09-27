export const name="battery_android_share";
export const id="dl_5a5f891f4ad571a8bf2d";
export const url=new URL("../icons/battery_android_share.svg?v=6f3cc033702a291881b48516ae0f473b64cfbfa2e67219134e21a0a49ca30fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
