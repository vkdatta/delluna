export const name="battery_android_frame_bolt";
export const id="dl_66853181e843fad2972b";
export const url=new URL("../icons/battery_android_frame_bolt.svg?v=bb396376f42fb24fbf2d5b3acfc5605f00963e0ad78563db7defec38f9b0a9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
