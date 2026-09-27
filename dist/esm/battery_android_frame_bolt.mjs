export const name="battery_android_frame_bolt";
export const id="dl_9e85101f232cf3bf0d9b";
export const url=new URL("../icons/battery_android_frame_bolt.svg?v=287e78550683d92702969c80718fae316a5c2282efe366a88e2aafca7eedcf59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
