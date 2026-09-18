export const name="battery_android_frame_bolt";
export const id="dl_774587005b5640a6bffa";
export const url=new URL("../icons/battery_android_frame_bolt.svg?v=f20d5f762ad55d68305805b05c52f1558376c46ddad835033bec053ec8adb157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
