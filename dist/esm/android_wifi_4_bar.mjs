export const name="android_wifi_4_bar";
export const id="dl_57dade1c8fb44c6f8026";
export const url=new URL("../icons/A/android_wifi_4_bar.svg?v=6585ea1beb60c144bff59c36b3570e6edbd1432e25d725e3e8b8a0ceaf804a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
