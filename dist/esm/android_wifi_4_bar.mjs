export const name="android_wifi_4_bar";
export const id="dl_85bbcabdb5dfbe4c6a8c";
export const url=new URL("../icons/android_wifi_4_bar.svg?v=30d2125a8a00274a8ae1a80495f353150a1cb0d9f26b11592b6c18b64096271e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
