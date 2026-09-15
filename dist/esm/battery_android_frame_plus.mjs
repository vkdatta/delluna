export const name="battery_android_frame_plus";
export const id="dl_4bfde1e6a9d34499bcfd";
export const url=new URL("../icons/B/battery_android_frame_plus.svg?v=a77de5cd46b2db9adda56c660be51d57289f570f45a5fbae6aabc1ec0b261120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
