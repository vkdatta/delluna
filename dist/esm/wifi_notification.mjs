export const name="wifi_notification";
export const id="dl_28f2128492c7e3d24f28";
export const url=new URL("../icons/wifi_notification.svg?v=485b83a6e5d1b87cdc31e471caf7cc655e9c24d6dd2b4a877748f0ce9dff024a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
