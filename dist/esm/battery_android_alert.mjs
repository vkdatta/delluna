export const name="battery_android_alert";
export const id="dl_6927410b546566edfa37";
export const url=new URL("../icons/battery_android_alert.svg?v=1089173ce3d6bea1dac2d7dd03ac23c56a8a40dd6e8a4b0a9d59d2ffd4d20f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
