export const name="android_wifi_3_bar";
export const id="dl_75b4eefd270e4153b838";
export const url=new URL("../icons/A/android_wifi_3_bar.svg?v=6f446ed43fd8ba9d026831866548ccd4e5b13e1955388f6223645b0d11bfb2bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
