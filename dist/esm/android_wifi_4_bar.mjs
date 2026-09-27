export const name="android_wifi_4_bar";
export const id="dl_5b023a0ac79572e42912";
export const url=new URL("../icons/android_wifi_4_bar.svg?v=14933395f80bae1b3cb517d54ea19aee9a6a660b1573001b706c281578142143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
