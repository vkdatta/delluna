export const name="battery_android_frame_full";
export const id="dl_2e5d84edf0f2286aa4a7";
export const url=new URL("../icons/battery_android_frame_full.svg?v=2c62b87854dfb77f0f0cb7b18f030dc9b1fe2fdd3eddc275767b47fc9d2226c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
